/// <reference path="../app.ts" />

'use strict';

module angularTsSampleApp2App {
  export interface IWatchedScope extends ng.IScope {
    movies: any[];
  }

  export class WatchedCtrl {

    constructor (private $scope: IWatchedScope, private movieList: MovieList) {
      $scope.movies = this.getMoviesList();
    }

    getMoviesList = function (): IMovie[] {
      return this.movieList.movies;
    };

    removeTitle = function(title): void {
      this.movieList.removeMovie(title);
    };
  }
}

angular.module('angularTsSampleApp2App')
  .controller('WatchedCtrl', angularTsSampleApp2App.WatchedCtrl);
