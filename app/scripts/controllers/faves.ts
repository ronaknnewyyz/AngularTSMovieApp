/// <reference path="../app.ts" />

'use strict';

module angularTsSampleApp2App {
  export interface IFavesScope extends ng.IScope {
    movies: any[];
  }

  export class FavesCtrl {

    constructor (private $scope: IFavesScope, private movieList: MovieList) {
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
  .controller('FavesCtrl', angularTsSampleApp2App.FavesCtrl);
