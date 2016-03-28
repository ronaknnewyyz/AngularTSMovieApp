/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/omdb.ts" />

'use strict';

describe('Service: omdb', () => {

  // load the service's module
  beforeEach(module('angularTsSampleApp2App'));

  // instantiate service
  var omdb;
  beforeEach(inject(_omdb_ => {
    omdb = _omdb_;
  }));

  it('should do something', () => {
    expect(!!omdb).toBe(true);
  });

});
