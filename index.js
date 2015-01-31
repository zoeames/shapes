//IIFE initializing agular module goes here
(function(){
  'use strict';

  angular.module('zoeames', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    //.when('/resume', {templateUrl:'/views/resume/resume.html', controller:'ResumeCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
