/// <reference path="../app.ts" />

module angularTsSampleApp2App {

  'use strict';

  export interface IToWatchScope extends ng.IScope {
    movies: IMovie[];
    formValues: IMovie;
    add: any;
    searchResult: any;
    searchSuccess: boolean;
    searchFormError: boolean;
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
    movies: IMovie;
    searchSuccess: boolean;
    searchFormError: boolean;
    searchResult: any;
    scope: IToWatchScope;

    constructor (public $scope: IToWatchScope, public movieList: MovieList, public omdb: Omdb) {
      $scope.movies = this.getMoviesList();
      $scope.add = this.addMovie;
      this.searchSuccess = false;
      this.searchFormError = false;
      this.scope = $scope;
    }

    addMovie(addMovieForm: any): void {
      if (addMovieForm.$valid) {
        if (this.$scope.formValues && this.$scope.formValues.Title) {
          this.movieList.addMovie(this.$scope.formValues);
          this.resetForm();
        }
      } else {
        if (addMovieForm.Title.$error.required) {
          alert('Movie Title is required!');
        } else {
          alert('Invalid Form!');
        }
      }
    };

    removeTitle(title: string): void {
      this.movieList.removeMovie(title);
    };

    getMoviesList(): IMovie[] {
      return this.movieList.getMoviesList();
    };

    searchTitle(title: string, searchMovieForm: any): any {
      var that: any = this;
      console.log('Search Movie Form valid? : ' + searchMovieForm.$valid);
      if (title) {
        console.log('Calling Search Function');
        that.searchFormError = false;
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
      } else {
        that.searchFormError = true;
      }
    };

    addSearchedTitle(movie: IMovie): void {
      this.movieList.addMovie(movie);
      this.searchResult = {};
      this.searchSuccess = false;
    };

    resetForm(): void {
      this.$scope.formValues = {
        Title: undefined,
        Year: undefined,
        Director: undefined,
        Watched: false,
        Favourite: false
      };
    }

  }
}

angular.module('angularTsSampleApp2App')
  .controller('ToWatchCtrl', angularTsSampleApp2App.ToWatchCtrl);
