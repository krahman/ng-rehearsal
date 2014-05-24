'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngRehearsalApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });


});

describe('filter', function(){
    beforeEach(module('ngRehearsalApp'));

    describe('reverse', function(){
        it('should reverse a string', inject(function(reverseFilter){
            expect(reverseFilter('ABCD')).toEqual('DCBA');
        }));
    });
});
