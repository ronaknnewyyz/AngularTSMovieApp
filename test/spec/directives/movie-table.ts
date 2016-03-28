/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/directives/movietable.ts" />

'use strict';

describe('Directive: movieTable', () => {

  // load the directive's module
  beforeEach(module('angularTsSampleApp2App'));

  var element: JQuery,
    scope: ng.IScope;

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<movie-table></movie-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the movieTable directive');
  }));
});
