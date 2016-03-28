/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/faves.ts" />

'use strict';

describe('Controller: FavesCtrl', () => {

  // load the controller's module
  beforeEach(module('angularTsSampleApp2App'));

  var FavesCtrl: angularTsSampleApp2App.FavesCtrl,
    scope: angularTsSampleApp2App.IFavesScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    FavesCtrl = $controller('FavesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
