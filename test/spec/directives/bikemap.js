'use strict';

describe('Directive: bikeMap', function () {

  // load the directive's module
  beforeEach(module('web2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bike-map></bike-map>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bikeMap directive');
  }));
});
