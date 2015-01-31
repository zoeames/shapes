//IIFE initializing agular module goes here
(function(){
  'use strict';

  angular.module('zoeames', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/cube', {templateUrl:'/views/cube/cube.html', controller:'CubeCtrl'})
    .when('/sphere', {templateUrl:'/views/sphere/sphere.html', controller:'SphereCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
