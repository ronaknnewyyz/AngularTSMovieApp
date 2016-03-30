/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/watched.ts" />

'use strict';

describe('Controller: WatchedCtrl', () => {

  // load the controller's module
  beforeEach(module('angularTsSampleApp2App'));

  var WatchedCtrl: angularTsSampleApp2App.WatchedCtrl,
    scope: angularTsSampleApp2App.IWatchedScope,
    list = [{
      'Title' : 'Now you see me',
      'Year' : '2014',
      'Director' : 'Speilberg',
      'Favourite' : true,
      'Watched' : false
    }];

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService, _movieList_: MovieList) => {
    scope = <any>$rootScope.$new();
    WatchedCtrl = $controller('WatchedCtrl', {
      $scope: scope
    });

    var movieService = _movieList_;

    spyOn(movieService, 'getMoviesList').and.returnValue(list);
    spyOn(movieService, 'removeMovie').and.returnValue(list = []);
  }));

  it('should test Watched controller is defined', () => {
    expect(WatchedCtrl).toBeDefined();
  });

  it('should confirm Watched controller functions', function () {
    expect(WatchedCtrl.getMoviesList).toBeDefined();
    expect(typeof WatchedCtrl.getMoviesList).toBe('function');
    expect(WatchedCtrl.removeTitle).toBeDefined();
    expect(typeof WatchedCtrl.removeTitle).toBe('function');
  });

  it('should confirm Watched controller get movies function', () => {
    expect(WatchedCtrl.getMoviesList()).toEqual(list);
  });

  it('should confirm Watched controller remove Title function', () => {
    WatchedCtrl.removeTitle('Now you see me');
    expect(WatchedCtrl.getMoviesList().length).toEqual(0);
  });

});
