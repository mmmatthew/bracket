'use strict';

/**
 * @ngdoc directive
 * @name web2App.directive:bikeFilter
 * @description
 * # bikeFilter
 */
angular.module('web2App')
  .directive('bikeFilter', function (appData, mapService) {
    return {
      templateUrl: 'views/bikefilter.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the bikeFilter directive');
        scope.bikeList = appData.getBikeSelection();
        scope.updateSelection = appData.updateSelection;
        scope.flash = mapService.showBracket;
        scope.unflash = mapService.hideBrackets;
        scope.searchBike = '';

        // Watch for changes in the list
        scope.$watch('filteredList', function(list) {
          appData.updateSelection(list);
        });
        scope.$on('selectionReset',function () {
          scope.searchBike = ''
        })
      }
    };
  });
