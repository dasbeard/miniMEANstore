// =========================================================================
// ========================= Login Factory =================================
// =========================================================================
app.factory('customerFactory', function ($http){
  var factory = {};

  var user = {};

  //Register method
  factory.addCustomer = function(input, callback){
    console.log('At factory');
    $http.post('/customers/new', input).then(function(output){
      console.log('Made it back to factory');
      callback(output.data);
    });
  }


  factory.getAllCustomers = function(callback){
    $http.get('/customers/all').then(function(output){
      console.log('Got all Customers');
      callback(output.data);
    });
  }

  factory.removeCustomer = function(inputId, callback){
    console.log('======== At Factory ========');
    console.log(inputId);
    $http.post('/customers/remove', {id: inputId}).then(function(output){
      console.log('Back from factory');
      callback(output.data)
    });
  }


  return factory;
}); // End Login Factory


// =========================================================================
// =========================== Products Factory ============================
// =========================================================================
app.factory('productsFactory', function($http){
  var factory = {};

factory.getAllProducts = function(callback){
  $http.get('/products/all').then(function(output){
    console.log('Got all Products');
    callback(output.data);
  });
}


factory.addNewProduct = function(input, callback){
  console.log('At factory');
  $http.post('/products/new', input).then(function(output){
    console.log('Made it back to factory');
    callback(output.data);
  });
}


return factory;

}); // End Message Factory
