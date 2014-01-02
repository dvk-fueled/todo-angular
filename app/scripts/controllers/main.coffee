"use strict"

app = angular.module("todoApp")

app.constant('PARSE_APPLICATION_ID', 'HmmJwp2AaCHVSmG1a7tPZHUMnUwxLbrinqGrr9tE')
app.constant('PARSE_REST_API_KEY', 'jQ6DQhNXE3AfInnarLbZnLFQz90MgzdCl5kbiIrk')

app.config((ParseProvider, PARSE_APPLICATION_ID, PARSE_REST_API_KEY) ->
  ParseProvider.initialize PARSE_APPLICATION_ID, PARSE_REST_API_KEY
)

app.factory 'TODO', ["Parse", (Parse) ->
  class TODO extends Parse.Model
    @configure "Todo", "text", "done"]

app.controller "TodoCtrl", ($scope, TODO) ->
  loadData = ->
    TODO.query().then (todos) ->
      $scope.todos = todos
      todos

  saveData = (todos) ->
    todos.forEach (todo) ->
      if todo.isNew()
        todo.save()
      else
        todo.update()

  loadData()

  $scope.addTodo = (Todo) ->
    todo = new TODO
    todo.text = Todo.text
    todo.done = false
    $scope.todos.push todo
    $scope.syncData()

  $scope.completeTodo = (index) ->
    $scope.todos[index].done = not $scope.todos[index].done
    todo = $scope.todos[index]
    console.log todo
    todo.update()

  $scope.save = ->
    todo = new TODO
    todo.text = $scope.todoText
    todo.done = false
    $scope.addTodo todo

  $scope.syncData = ->
    saveData $scope.todos

  $scope.destroy = ->
    oldTodos = undefined
    oldTodos = $scope.todos
    $scope.todos = []
    oldTodos.forEach (todo) ->
      unless todo.done
        $scope.todos.push todo
      else
        todo.destroy()
    $scope.syncData()
