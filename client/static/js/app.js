//==================== Creating Angular App ====================
var app = angular.module('myApp', ['ngRoute', 'focus-if']);

//==================== Angular Routes ====================
app.config(function($routeProvider){
  $routeProvider
    .when('/dashboard', {
      templateUrl: 'static/partials/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/products', {
      templateUrl: 'static/partials/products.html',
      controller: 'productsController'
    })
    .when('/orders', {
      templateUrl: 'static/partials/orders.html',
      controller: 'ordersController'
    })
    .when('/customers', {
      templateUrl: 'static/partials/customers.html',
      controller: 'customersController'
    })
    .otherwise({
      redirectTo: '/dashboard'
    })
});
