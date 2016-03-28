/// <reference path="../app.ts" />

module angularTsSampleApp2App {

  'use strict';

  export class MovieTable implements ng.IDirective {
    restrict: string = 'E';
    replace: boolean = true;
    scope: any = {
      movies: '=',
      name: '@',
      remove: '&'
    };
    templateUrl: string = 'views/directives/movie-table.html';
    transclude: boolean = true;
  }

  export function movieTableFactory(): MovieTable {
    return new angularTsSampleApp2App.MovieTable();
  }
}

angular.module('angularTsSampleApp2App')
  .directive('movieTable', angularTsSampleApp2App.movieTableFactory);
