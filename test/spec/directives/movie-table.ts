/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/directives/movie-table.ts" />

'use strict';

describe('Directive: movieTable', () => {

  // load the directive's module
  beforeEach(module('angularTsSampleApp2App'));

  var element: JQuery,
    scope: ng.IScope;

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('Replaces the element with the appropriate content', inject(($compile: ng.ICompileService) => {
    element = angular.element('<movie-table></movie-table>');
    element = $compile(element)(scope);
    expect(element.html()).toBe('');
  }));
});
