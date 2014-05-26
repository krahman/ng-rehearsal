'use strict'

angular.module('ngRehearsalApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]

  .controller 'FirstCtrl', ($scope, Data) ->
    $scope.data = Data