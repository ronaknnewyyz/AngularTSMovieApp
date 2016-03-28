/// <reference path="../app.ts" />

module angularTsSampleApp2App {

  'use strict';

  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainCtrl {

  }
}

angular.module('angularTsSampleApp2App')
  .controller('MainCtrl', angularTsSampleApp2App.MainCtrl);
