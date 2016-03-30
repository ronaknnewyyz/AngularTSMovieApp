/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/movie-list.ts" />

'use strict';

describe('Service: movieList', () => {

  var movie = {
    'Title' : 'Now you see me',
    'Year' : '2014',
    'Director' : 'Speilberg',
    'Favourite' : true,
    'Watched' : false
  };

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

  it('should test movie-list service is defined', function () {
    expect(movieList).toBeDefined();
  });

  it('should test movie-list service functions are defined', function () {
    expect(movieList.getMoviesList).toBeDefined();
    expect(typeof movieList.getMoviesList).toBe('function');
    expect(movieList.addMovie).toBeDefined();
    expect(typeof movieList.addMovie).toBe('function');
    expect(movieList.removeMovie).toBeDefined();
    expect(typeof movieList.removeMovie).toBe('function');
  });

  it('should test movie-list service add movie and get movie function', function () {
    movieList.addMovie(movie);
    var movieObj = movieList.getMoviesList();
    expect(movieObj[0].Title).toBe('Now you see me');
    expect(movieObj[0].Year).toBe('2014');
    expect(movieObj[0].Director).toBe('Speilberg');
  });

  it('should test movie-list service remove movie and get movie function', function () {
    var movieObj = movieList.getMoviesList(),
     len = movieObj.length;
    movieList.removeMovie('Now you see me');
    var movieObj = movieList.getMoviesList();
    expect(movieObj.length).toBe(len - 1);
  });

});
