'use strict';

describe('Service: randomService', function () {

  // load the service's module
  beforeEach(module('web2App'));

  // instantiate service
  var randomService;
  beforeEach(inject(function (_randomService_) {
    randomService = _randomService_;
  }));

  it('should do something', function () {
    expect(!!randomService).toBe(true);
  });

});
