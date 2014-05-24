'use strict';

var ngRehearsalApp = angular.module('ngRehearsalApp');

ngRehearsalApp.factory('Data', function(){
    return {
        message: 'I\'am data from a service.'
    };
});

ngRehearsalApp.factory('Avangers', function(){
    var Avangers = {};
    Avangers.cast = [
        {
            name: "Khal",
            character: "Daddy"
        },
        {
            name: "Ulfah",
            character: "Mommy"
        },
        {
            name: "Nevda",
            character: "Daughter"
        }
    ];
    return Avangers;
});

ngRehearsalApp.filter('reverse', function(){
    return function(text){
        return text.split("").reverse().join("");
    }
})

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

    // this function below can be replaced by reverse filter
    $scope.reversedMessage = function(message){
        return message.split("").reverse().join("");
    }
});

ngRehearsalApp.controller('AvangersCtrl', function($scope, Avangers){
    $scope.avangers = Avangers;
})
