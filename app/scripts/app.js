'use strict';

/**
 * @ngdoc overview
 * @name web2App
 * @description
 * # web2App
 *
 * Main module of the application.
 */
angular
  .module('web2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

  })
  .constant('config', {
    app: {
      name: 'Portail VIVA (Vigilance Intempéries Valais)',
      version: 1.0,
      controllers: {},
      viewsFolder: 'views',
    },
    mapBox: {
      url: 'https://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
      apiKey: 'pk.eyJ1Ijoicm9vdHMtbWFuIiwiYSI6ImNpZzgzMTJ4ZjF5bnJ1aW0wODY4NXBubW0ifQ.H57shoREWi0eQc-4IAhsJw',
      mapId: 'mmatthew.b1a56aa4',
    },
    map: {
      centerLatitude: 47.3769,
      centerLongitude: 8.5417,
      centerZoom: 12,
      minZoom: 8,
      layerTypes: {
        xyz: 'xyz',
        group: 'group',
        geoJSONShape: 'geoJSONShape',
      },
      coordinateFormat: {
        lv95: "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs",
        lv03: "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs",
        latlong: "+proj=longlat +datum=WGS84 +no_defs"
      }
    }
  });
