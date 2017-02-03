'use strict';

describe('Directive: bikeFilter', function () {

  // load the directive's module
  beforeEach(module('web2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bike-filter></bike-filter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bikeFilter directive');
  }));
});
