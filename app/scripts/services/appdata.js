'use strict';

/**
 * @ngdoc service
 * @name web2App.appData
 * @description
 * # appData
 * Service in the web2App.
 */
angular.module('web2App')
  .service('appData', function ($rootScope, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var bikeList = [
      {
        id: '1aj23',
        status: 'warning',
        lastSeen: '3.2.17 11:30',
        type: 'm-bike',
        coords: [
          8.444709777832031,
          47.39881398671558
        ]
      },
      {
        id: '24534',
        status: 'ok',
        lastSeen: '2.2.17 10:34',
        type: 'm-bike',
        coords: [
          8.507194519042969,
          47.36371108555984
        ]
      },
      {
        id: '5642',
        status: 'ok',
        lastSeen: '3.2.17 10:20',
        type: 'm-bike',
        coords: [
          8.589935302734375,
          47.377197083721654
        ]
      },
      {
        id: '43256',
        status: 'ok',
        lastSeen: '3.2.17 10:53',
        type: 'm-budget',
        coords: [
          8.54461669921875,
          47.39788440990287
        ]
      },
      {
        id: '432511',
        status: 'danger',
        lastSeen: '1.2.17 10:53',
        type: 'm-budget',
        coords: [
          8.491401672363281,
          47.41531124609266
        ]
      }
    ];
    var bikeSelection = bikeList;
    var pathData;
    $http.get('data/path.json').then(function (res) {
      pathData = res.data;
    });
    $rootScope.appMode = 'many';
    $rootScope.currentBike = {};

    // Methods
    var resetSelection = function () {
      updateSelection(bikeList);
      $rootScope.$broadcast('selectionReset');
    };
    var updateSelection = function (list) {
      bikeSelection = list;
      $rootScope.$broadcast('selectionUpdated');
    //  check if the mode needs to be changed
      if (list.length==1){
        $rootScope.appMode = 'one';
        $rootScope.currentBike = list[0];
        $rootScope.$broadcast('bikeSelected')
      }else{
        $rootScope.appMode = 'many';
      }

    };
    var redigest = function () {
      $rootScope.$apply();
    }

    var getBikeSelection = function () {
      return bikeSelection;
    };
    var getBikePath = function () {
      return pathData;
    }
    var getBikeInfo = function (bikeId) {
      console.log(bikeId)
    };
    return{
      getBikeInfo: getBikeInfo,
      getBikeSelection: getBikeSelection,
      resetSelection: resetSelection,
      getBikePath: getBikePath,
      updateSelection: updateSelection,
      redigest: redigest
    }
  });
