/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/watched.ts" />

'use strict';

describe('Controller: WatchedCtrl', () => {

  // load the controller's module
  beforeEach(module('angularTsSampleApp2App'));

  var WatchedCtrl: angularTsSampleApp2App.WatchedCtrl,
    scope: angularTsSampleApp2App.IWatchedScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    WatchedCtrl = $controller('WatchedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
