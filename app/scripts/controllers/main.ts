/// <reference path="../app.ts" />

'use strict';

module angularTsSampleApp2App {
  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainCtrl {

    constructor (private $scope: IMainScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('angularTsSampleApp2App')
  .controller('MainCtrl', angularTsSampleApp2App.MainCtrl);
