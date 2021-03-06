/// <reference path="../app.ts" />

module angularTsSampleApp2App {

  'use strict';

  export interface IToWatchScope extends ng.IScope {
    movies: IMovie[];
    formValues: IMovie;
    add: any;
    searchResult: any;
    searchSuccess: boolean;
    scope: any;
  }

  export interface IMovie {
    Title: string;
    Year: string;
    Director: string;
    Watched: boolean;
    Favourite: boolean;
  }

  export class ToWatchCtrl {
    movies: any;
    searchSuccess: boolean;
    searchResult: any;
    scope: IToWatchScope;

    constructor (public $scope: IToWatchScope, public movieList: MovieList, public omdb: Omdb) {
      $scope.movies = this.getMoviesList();
      $scope.add = this.addMovie;
      this.searchSuccess = false;
      this.scope = $scope;
    }

    addMovie(): void {
      if (this.$scope.formValues && this.$scope.formValues.Title) {
        this.movieList.addMovie(this.$scope.formValues);
      }
    };

    removeTitle(title: string): void {
      this.movieList.removeMovie(title);
    };

    getMoviesList(): IMovie[] {
      return this.movieList.getMoviesList();
    };

    searchTitle(title: string): any {
      var that: any = this;
      if (title) {
        console.log('Calling Search Function');
        this.omdb.searchTitle(title)
        .then(function success(response: any): any {
          console.log('Search Response ' + JSON.stringify(response.data));
          if (response.data.Error) {
            console.log('Search Result failed: ' + response.data.Error);
            alert(response.data.Error + ' Please try again');
          } else {
            that.searchResult = response.data;
            that.searchSuccess = true;
            return response.data;
          }
        }, function error(response: any): void {
          console.log('Search Result failed: ' + response.data.Error);
          alert('No Movies Found! Please try again');
        });
      }
    };

    addSearchedTitle(movie: IMovie): void {
      this.movieList.addMovie(movie);
      this.searchResult = {};
      this.searchSuccess = false;
    };

  }
}

angular.module('angularTsSampleApp2App')
  .controller('ToWatchCtrl', angularTsSampleApp2App.ToWatchCtrl);
