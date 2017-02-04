'use strict';

/**
 * @ngdoc directive
 * @name web2App.directive:bikeDetails
 * @description
 * # bikeDetails
 */

angular.module('web2App')
  .directive('bikeDetails', function (appData) {
    return {
      templateUrl: 'views/bikedetails.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.resetSelection = appData.resetSelection;
        scope.lastSeen = moment(scope.currentBike.lastSeen).format('DD/MM/YY@hh:mm:ss');
      }
    };
  });
