'use strict';

/**
 * @ngdoc service
 * @name web2App.mapService
 * @description
 * # mapService
 * Service in the web2App.
 */
angular.module('web2App')
  .service('mapService', function ($rootScope, config, appData, randomService) {


    // Global variables
    var map;
    var layers = {
      bikeLayer:L.layerGroup(),
      bikePathLayer:L.layerGroup(),
      bracketLayer:L.layerGroup()
    };

    var bbox = [
      47.35115205629185,
      8.585128784179688,
      47.405088201236765,
      8.468399047851562]

    // Functions

    var createMap = function(mapId) {
      var defaultSetting = {
        // minZoom:config.map.minZoom,
        zoomControl: false
      };

      // Instanciate map
      map = L.map(mapId, defaultSetting);
      map.setView([config.map.centerLatitude, config.map.centerLongitude], config.map.centerZoom);
      L.control.scale({metric:true, imperial:false}).addTo(map);


      // Add base layer
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Copyright',
        id: config.mapBox.mapId,
        accessToken: config.mapBox.apiKey
      }).addTo(map);

      //  Add bike and path layers
      map.addLayer(layers.bikeLayer);
      map.addLayer(layers.bikePathLayer);
      map.addLayer(layers.bracketLayer);

    };

    var showBracket = function (bike) {
        var html = '<img src="images/bracket.png">';
        var bracketIcon = L.divIcon({html:html, className:'bracket-icon'});
        var marker = new L.marker(bike.coords, {icon:bracketIcon});
        layers.bracketLayer.addLayer(marker);
    };
    var hideBrackets = function () {
      // remove all brackets
      layers.bracketLayer.eachLayer(function(l) {
        map.removeLayer(l);
      });
    };
    var displayBikes = function (bikeList) {
      if($rootScope.listLoaded){
        // remove all bikes
        layers.bikeLayer.eachLayer(function(l) {
          map.removeLayer(l);
        });
        var focus = bikeList.length==1?' focus':'';
        bikeList.forEach(function(bike) {
          var html = '<div class="bike-icon btn-'+bike.status+focus+'"></div>';
          var bikeIcon = L.divIcon({html:html, className:''});
          var marker = new L.marker([bike.coords[0],bike.coords[1]], {icon:bikeIcon});
          marker.bikeData = bike;
          marker.on('click', function (e) {
            appData.updateSelection([e.target.bikeData]);
            appData.redigest();
          });
          layers.bikeLayer.addLayer(marker);
        });
      }

    };

    var displayPath = function (path) {
      // console.log(path)
      // create a red polyline from an array of LatLng points
      layers.bikePathLayer.addLayer(L.polyline(path, {color: 'red'}));
    };
    var removePath = function () {
      layers.bikePathLayer.eachLayer(function(l) {
        map.removeLayer(l);
      });
    };

    return {
      createMap: createMap,
      displayBikes: displayBikes,
      displayPath: displayPath,
      removePath: removePath,
      showBracket: showBracket,
      hideBrackets: hideBrackets
    }
  });
