/// <reference path="../app.ts" />

'use strict';

module angularTsSampleApp2App {

  export class MovieTable implements ng.IDirective {
    restrict: string = 'E';
    replace: boolean = true;
    scope: any = {
      name: '@',
      movies: '=',
      remove: '&'
    };
    templateUrl: string = 'views/directives/movie-table.html';
    transclude: boolean = true;
  }

  export function movieTableFactory() {
    return new angularTsSampleApp2App.MovieTable();
  }
}

angular.module('angularTsSampleApp2App')
  .directive('movieTable', angularTsSampleApp2App.movieTableFactory);
