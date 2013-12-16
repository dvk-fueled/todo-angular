var app;

app = angular.module('Todo', ['Parse']);

app.config(function(ParseProvider) {
  return ParseProvider.initialize("jml5ACSkQXYJDPFn7CxNof3wwn364cynInyohleY", "AyAJDOV5RQD82r0HRb0Yp5DpBg0H5OFZ6H9rXmxM");
});

app.controller('TodoCtrl', function($scope) {
  $scope.todos = [
    {
      text: "learning angular",
      done: true
    }, {
      text: "build an angular app",
      done: false
    }
  ];
  $scope.addTodo = function() {
    if ($scope.todoText) {
      $scope.todos.push({
        text: $scope.todoText,
        done: false
      });
      return scope.todoText = "";
    }
  };
  $scope.remaining = function() {
    var count;
    count = 0;
    angular.forEach($scope.todos, function(todo) {
      return count += (todo.done ? 0 : 1);
    });
    return count;
  };
  return $scope.archive = function() {
    var oldTodos;
    oldTodos = $scope.todos;
    $scope.todos = [];
    return angular.forEach(oldTodos, function(todo) {
      if (!todo.done) {
        return $scope.todos.push(todo);
      }
    });
  };
});
