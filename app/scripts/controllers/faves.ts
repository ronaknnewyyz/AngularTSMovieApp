/// <reference path="../app.ts" />

module angularTsSampleApp2App {

  'use strict';

  export interface IFavesScope extends ng.IScope {
    movies: any[];
  }

  export class FavesCtrl {

    constructor (private $scope: IFavesScope, private movieList: MovieList) {
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
  .controller('FavesCtrl', angularTsSampleApp2App.FavesCtrl);
