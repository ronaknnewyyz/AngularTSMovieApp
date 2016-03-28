/// <reference path="../app.ts" />

module angularTsSampleApp2App {

  'use strict';

  export class Omdb {
    httpService: ng.IHttpService;

    constructor(private $http: ng.IHttpService) {
      this.httpService = $http;
    }

    searchTitle (title: string): ng.IPromise<any> {
      console.log('Calling OMDB Function');
      return this.httpService({
        method: 'GET',
        url: 'http://www.omdbapi.com/?t=' + title
      });
    };
  }
}

angular.module('angularTsSampleApp2App')
  .service('omdb', angularTsSampleApp2App.Omdb);
