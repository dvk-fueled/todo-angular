(function(){"use strict";var a;a=angular.module("todoApp",["ngCookies","ngResource","ngSanitize","ngRoute","Parse"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/main.html",controller:"TodoCtrl"}).otherwise({redirectTo:"/"})}])}).call(this),function(){"use strict";var a,b,c,d={}.hasOwnProperty,e=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};a="HmmJwp2AaCHVSmG1a7tPZHUMnUwxLbrinqGrr9tE",b="jQ6DQhNXE3AfInnarLbZnLFQz90MgzdCl5kbiIrk",c=angular.module("todoApp"),c.config(["ParseProvider",function(c){return c.initialize(a,b)}]),c.factory("TODO",["Parse",function(a){var b,c;return b=function(a){function b(){return c=b.__super__.constructor.apply(this,arguments)}return e(b,a),b.configure("Todo","text","done"),b}(a.Model)}]),c.controller("TodoCtrl",["$scope","TODO",function(a,b){var c,d;return c=function(){return b.query().then(function(b){return a.todos=b,b})},d=function(a){return a.forEach(function(a){return a.isNew()?a.save():a.update()})},c(),a.addTodo=function(c){var d;return d=new b,d.text=c.text,d.done=!1,a.todos.push(d),a.syncData()},a.completeTodo=function(b){var c;return a.todos[b].done=!a.todos[b].done,c=a.todos[b],console.log(c),c.update()},a.save=function(){var c;return c=new b,c.text=a.todoText,c.done=!1,a.addTodo(c)},a.syncData=function(){return d(a.todos)},a.destroy=function(){var b;return b=void 0,b=a.todos,a.todos=[],b.forEach(function(b){return b.done?b.destroy():a.todos.push(b)}),a.syncData()}}])}.call(this);