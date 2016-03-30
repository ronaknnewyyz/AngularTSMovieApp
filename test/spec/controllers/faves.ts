/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/faves.ts" />

'use strict';

describe('Controller: FavesCtrl', () => {

  // load the controller's module
  beforeEach(module('angularTsSampleApp2App'));

  var FavesCtrl: angularTsSampleApp2App.FavesCtrl,
    scope: angularTsSampleApp2App.IFavesScope,
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
    FavesCtrl = $controller('FavesCtrl', {
      $scope: scope
    });

    var movieService = _movieList_;

    spyOn(movieService, 'getMoviesList').and.returnValue(list);
    spyOn(movieService, 'removeMovie').and.returnValue(list = []);
  }));

  it('should test Faves controller is defined', () => {
    expect(FavesCtrl).toBeDefined();
  });

  it('should confirm Faves controller functions', function () {
    expect(FavesCtrl.getMoviesList).toBeDefined();
    expect(typeof FavesCtrl.getMoviesList).toBe('function');
    expect(FavesCtrl.removeTitle).toBeDefined();
    expect(typeof FavesCtrl.removeTitle).toBe('function');
  });

  it('should confirm Faves controller get movies function', () => {
    expect(FavesCtrl.getMoviesList()).toEqual(list);
  });

  it('should confirm Faves controller remove Title function', () => {
    FavesCtrl.removeTitle('Now you see me');
    expect(FavesCtrl.getMoviesList().length).toEqual(0);
  });

});
