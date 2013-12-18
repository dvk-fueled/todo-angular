"use strict"

PARSE_APPLICATION_ID = 'HmmJwp2AaCHVSmG1a7tPZHUMnUwxLbrinqGrr9tE'
PARSE_REST_API_KEY   = 'jQ6DQhNXE3AfInnarLbZnLFQz90MgzdCl5kbiIrk'

app = angular.module("todoApp")
app.config((ParseProvider) ->
  ParseProvider.initialize PARSE_APPLICATION_ID, PARSE_REST_API_KEY
)

app.factory 'TODO', ["Parse", (Parse) ->
  class TODO extends Parse.Model
    @configure "Todo", "text", "done"]

app.controller "Todolist", ["$scope", "TODO", "Parse", ($scope, TODO, Parse) ->
  $scope.load = ->
    TODO.query().then (tasks) ->
      $scope.tasks = tasks
  $scope.destroy = (Todo) ->
    Todo.destroy().then ->
      $scope.load()
  $scope.load()
  ]

app.controller "TodoList", ($scope) ->
  $scope.todos = [
    text: "learning angular"
    done: true
  ,
    text: "build an angular app"
    done: false
  ]
  $scope.addTodo = ->
    if $scope.todoText
      $scope.todos.push
        text: $scope.todoText
        done: false

      $scope.todoText

  $scope.remaining = ->
    count = undefined
    count = 0
    angular.forEach $scope.todos, (todo) ->
      count += ((if todo.done then 0 else 1))

    count

  $scope.archive = ->
    oldTodos = undefined
    oldTodos = $scope.todos
    $scope.todos = []
    angular.forEach oldTodos, (todo) ->
      $scope.todos.push todo  unless todo.done
