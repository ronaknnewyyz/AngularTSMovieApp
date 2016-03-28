/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

'use strict';

angular.module('angularTsSampleApp2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'views/main.html'
      })
      .when('/to-watch', {
        controller: 'ToWatchCtrl',
        controllerAs: 'watch',
        templateUrl: 'views/to-watch.html'
      })
      .when('/watched', {
        controller: 'WatchedCtrl',
        controllerAs: 'watched',
        templateUrl: 'views/watched.html'
      })
      .when('/faves', {
        controller: 'FavesCtrl',
        controllerAs: 'faves',
        templateUrl: 'views/faves.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
