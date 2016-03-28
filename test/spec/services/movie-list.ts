/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/movielist.ts" />

'use strict';

describe('Service: movieList', () => {

  // load the service's module
  beforeEach(module('angularTsSampleApp2App'));

  // instantiate service
  var movieList;
  beforeEach(inject(_movieList_ => {
    movieList = _movieList_;
  }));

  it('should do something', () => {
    expect(!!movieList).toBe(true);
  });

});
