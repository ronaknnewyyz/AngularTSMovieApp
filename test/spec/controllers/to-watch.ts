/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/to-watch.ts" />

'use strict';
import MovieList = angularTsSampleApp2App.MovieList;

describe('Controller: ToWatchCtrl', () => {

  // load the controller's module
  beforeEach(module('angularTsSampleApp2App'));

  var ToWatchCtrl: angularTsSampleApp2App.ToWatchCtrl,
    scope: angularTsSampleApp2App.IToWatchScope,
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
    ToWatchCtrl = $controller('ToWatchCtrl', {
      $scope: scope
    });

    var movieService = _movieList_;

    spyOn(movieService, 'getMoviesList').and.returnValue(list);
    spyOn(movieService, 'removeMovie').and.returnValue(list = []);
    spyOn(movieService, 'addMovie').and.returnValue(list);
  }));

  it('should test ToWatch controller is defined', () => {
    expect(ToWatchCtrl).toBeDefined();
  });

  it('should confirm ToWatch controller properties', () => {
    expect(ToWatchCtrl.searchSuccess).toBeDefined();
    expect(ToWatchCtrl.scope).toBeDefined();
  });

  it('should confirm ToWatch controller functions', function () {
    expect(ToWatchCtrl.addMovie).toBeDefined();
    expect(typeof ToWatchCtrl.addMovie).toBe('function');
    expect(ToWatchCtrl.removeTitle).toBeDefined();
    expect(typeof ToWatchCtrl.removeTitle).toBe('function');
    expect(ToWatchCtrl.getMoviesList).toBeDefined();
    expect(typeof ToWatchCtrl.getMoviesList).toBe('function');
    expect(ToWatchCtrl.searchTitle).toBeDefined();
    expect(typeof ToWatchCtrl.searchTitle).toBe('function');
    expect(ToWatchCtrl.addSearchedTitle).toBeDefined();
    expect(typeof ToWatchCtrl.addSearchedTitle).toBe('function');
  });

  it('should confirm ToWatch controller get movies function', () => {
    expect(ToWatchCtrl.getMoviesList()).toEqual(list);
  });

  it('should confirm ToWatch controller remove Title function', () => {
    ToWatchCtrl.removeTitle('Now you see me');
    expect(ToWatchCtrl.getMoviesList().length).toEqual(0);
  });

  it('should confirm ToWatch controller reset Form function', () => {
    ToWatchCtrl.resetForm();
    expect(ToWatchCtrl.$scope.formValues.Title).toBeUndefined();
    expect(ToWatchCtrl.$scope.formValues.Director).toBeUndefined();
    expect(ToWatchCtrl.$scope.formValues.Year).toBeUndefined();
    expect(ToWatchCtrl.$scope.formValues.Favourite).toBeFalsy();
    expect(ToWatchCtrl.$scope.formValues.Watched).toBeFalsy();
  });
});
