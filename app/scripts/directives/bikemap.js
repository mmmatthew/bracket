'use strict';

/**
 * @ngdoc directive
 * @name web2App.directive:bikeMap
 * @description
 * # bikeMap
 */
angular.module('web2App')
  .directive('bikeMap', function (mapService, appData) {
    return {
      template: '',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the bikeMap directive');
        mapService.createMap('map');
        scope.$on('listLoaded', function () {
          mapService.displayBikes(appData.getBikeSelection());
        })


        // WATCH
        // Updated selection
        scope.$on('selectionUpdated',function(){
          var bikes = appData.getBikeSelection();
          mapService.displayBikes(bikes);
          mapService.removePath()
        });
        // Focus on bike
        scope.$on('bikeSelected',function(){
          mapService.displayPath(appData.getBikePath(scope.currentBike.id))
        });
        //
      }
    };
  });
