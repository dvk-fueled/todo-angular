"use strict"
app = angular.module("todoApp", ["ngCookies", "ngResource", "ngSanitize", "ngRoute", "Parse"]).config ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "views/front.html"
    controller: "AuthCtrl"
  ).otherwise redirectTo: "/"
