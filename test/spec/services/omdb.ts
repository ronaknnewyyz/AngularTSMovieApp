/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/omdb.ts" />

'use strict';
import IPromise = angular.IPromise;

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

  it('should test omdb service is defined', function () {
    expect(omdb).toBeDefined();
  });

  it('should test omdb service functions are defined', function () {
    expect(omdb.searchTitle).toBeDefined();
    expect(typeof omdb.searchTitle).toBe('function');
  });

  it('should test omdb search movie function', function () {
    var movieObj = omdb.searchTitle('Terminator');
    expect(typeof movieObj).toBe('object');
  });

});
