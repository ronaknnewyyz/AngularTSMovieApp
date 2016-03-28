/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/towatch.ts" />

'use strict';

describe('Controller: ToWatchCtrl', () => {

  // load the controller's module
  beforeEach(module('angularTsSampleApp2App'));

  var ToWatchCtrl: angularTsSampleApp2App.ToWatchCtrl,
    scope: angularTsSampleApp2App.IToWatchScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    ToWatchCtrl = $controller('ToWatchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
