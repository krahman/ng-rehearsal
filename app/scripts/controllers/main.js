'use strict';

var ngRehearsalApp = angular.module('ngRehearsalApp');

ngRehearsalApp.factory('Data', function(){
    return {
        message: 'I\'am data from a service.'
    };
});


ngRehearsalApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});


ngRehearsalApp.controller('FirstCtrl', function($scope, Data){
    $scope.data = Data;
});

ngRehearsalApp.controller('SecondCtrl', function($scope, Data){
    $scope.data = Data;

    $scope.reversedMessage = function(message){
        return message.split("").reverse().join("");
    }
});

