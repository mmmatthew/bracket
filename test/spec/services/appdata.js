'use strict';

describe('Service: appData', function () {

  // load the service's module
  beforeEach(module('web2App'));

  // instantiate service
  var appData;
  beforeEach(inject(function (_appData_) {
    appData = _appData_;
  }));

  it('should do something', function () {
    expect(!!appData).toBe(true);
  });

});
