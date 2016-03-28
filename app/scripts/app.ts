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
  .config(($routeProvider:ng.route.IRouteProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/to-watch', {
        templateUrl: 'views/to-watch.html',
        controller: 'ToWatchCtrl',
        controllerAs: 'watch'
      })
      .when('/watched', {
        templateUrl: 'views/watched.html',
        controller: 'WatchedCtrl',
        controllerAs: 'watched'
      })
      .when('/faves', {
        templateUrl: 'views/faves.html',
        controller: 'FavesCtrl',
        controllerAs: 'faves'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
