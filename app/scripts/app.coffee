"use strict"
angular.module("Todo", ["ngCookies", "ngResource", "ngSanitize", "ngRoute"]).config ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "views/main.html"
    controller: "MainCtrl"
  ).otherwise redirectTo: "/"

// app = angular.module 'todoApp', ['Parse']

// app.config ( ParseProvider ) ->
//   ParseProvider.initialize(
//     "jml5ACSkQXYJDPFn7CxNof3wwn364cynInyohleY",
//     "AyAJDOV5RQD82r0HRb0Yp5DpBg0H5OFZ6H9rXmxM"
//     )

// app.controller 'TodoCtrl' = ($scope) ->
//   $scope.todos = [
//     text: "learning angular"
//     done: true
//   ,
//     text: "build an angular app"
//     done: false
//   ]
//   $scope.addTodo = ->
//     if $scope.todoText
//       $scope.todos.push
//         text: $scope.todoText
//         done: false

//       scope.todoText = ""

//   $scope.remaining = ->
//     count = 0
//     angular.forEach $scope.todos, (todo) ->
//       count += (if todo.done then 0 else 1)

//     count

//   $scope.archive = ->
//     oldTodos = $scope.todos
//     $scope.todos = []
//     angular.forEach oldTodos, (todo) ->
//       $scope.todos.push todo  unless todo.done
