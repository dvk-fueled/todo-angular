"use strict"
angular.module("todoApp", ["ngCookies", "ngResource", "ngSanitize", "ngRoute"]).config ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "views/main.html"
    controller: "TodoCtrl"
  ).otherwise redirectTo: "/"
