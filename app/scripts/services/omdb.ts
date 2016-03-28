/// <reference path="../app.ts" />

'use strict';

module angularTsSampleApp2App {
  import IHttpService = angular.IHttpService;
  export class Omdb {
    httpService : ng.IHttpService;

    constructor(private $http: ng.IHttpService) {
      this.httpService = $http;
    }

    searchTitle = function (title): ng.IPromise<any> {
      console.log("Calling OMDB Function");
      return this.httpService({
        method: 'GET',
        url: 'http://www.omdbapi.com/?t=' + title
      });
    }
  }
}

angular.module('angularTsSampleApp2App')
  .service('omdb', angularTsSampleApp2App.Omdb);
