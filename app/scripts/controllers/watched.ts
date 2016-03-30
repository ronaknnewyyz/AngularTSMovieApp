/// <reference path="../app.ts" />

module angularTsSampleApp2App {

  'use strict';

  export interface IWatchedScope extends ng.IScope {
    movies: any[];
  }

  export class WatchedCtrl {

    constructor (private $scope: IWatchedScope, private movieList: MovieList) {
      $scope.movies = this.getMoviesList();
    }

    getMoviesList(): IMovie[] {
      return this.movieList.getMoviesList();
    };

    removeTitle(title: string): void {
      this.movieList.removeMovie(title);
    };
  }
}

angular.module('angularTsSampleApp2App')
  .controller('WatchedCtrl', angularTsSampleApp2App.WatchedCtrl);
