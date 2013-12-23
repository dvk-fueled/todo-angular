"use strict"
app = angular.module("todoApp", ["ngCookies", "ngResource", "ngSanitize", "ngRoute", "Parse"]).config ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "views/main.html"
    controller: "TodoCtrl"
  ).otherwise redirectTo: "/"
