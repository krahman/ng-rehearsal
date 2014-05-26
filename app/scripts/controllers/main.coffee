'use strict'

ngRehearsalApp = angular.module('ngRehearsalApp')

#
# Factories
#

ngRehearsalApp.factory 'Data', ->
  message: 'I\'am data from a service'

ngRehearsalApp.factory 'Avangers', ->
  Avangers = {}
  Avangers.cast = [
    name:'Khal'
    character: 'Daddy'
  ,
    name: 'Ulfah'
    character: 'Mommy'
  ,
    name: 'Nevda'
    character: 'Daughter'
  ]

#
# Filters
#

ngRehearsalApp.filter 'reverse', ->
  (text) ->
    text.split('').reverse().join('')

#
# Controllers
#

ngRehearsalApp.controller 'MainCtrl', ($scope) ->
  $scope.awesomeThings = [
    'HTML5 Boilerplate'
    'AngularJS'
    'Karma'
  ]

ngRehearsalApp.controller 'FirstCtrl', ($scope, Data) ->
  $scope.data = Data

ngRehearsalApp.controller 'SecondCtrl', ($scope, Data) ->
  $scope.data = Data

ngRehearsalApp.controller 'AvangersCtrl', ($scope, Avangers) ->
  $scope.avangers = Avangers

#
# Directives
#

ngRehearsalApp.directive 'superman', ->
  restrict: 'E'
  template: '<div>Here I am to save the day</div>'

ngRehearsalApp.directive 'supermanattr', ->
  restrict: 'A'
  link: ->
    console.log 'I\'am working as an attribute'

ngRehearsalApp.directive 'sepermanclass', ->
  restrict: 'C'
  link: ->
    console.log 'I\'am working as a class'