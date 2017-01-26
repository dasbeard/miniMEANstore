// =========================================================================
// ======================= Customer Controller =============================
// =========================================================================
app.controller('customersController', function($scope, customerFactory, $location){
  $scope.test = 'Hello'
  $scope.customers = [];

  $scope.addNewCustomer = function(){
    $scope.error = ''

    console.log('Register Button Clicked');
    console.log($scope.newCustomer);
    if($scope.newCustomer == undefined){
      $scope.error = 'Customer Name is Required!';
    } else {
      customerFactory.addCustomer($scope.newCustomer, function(output){
        console.log('Back from Factory ---> addCustomer');
        console.log(output);
        if(output.error){
          $scope.error = output.error;
        } else {
          $scope.customers = output;
        }
      });
    }
    $scope.newCustomer = {};
  } // End Add New Customer


  customerFactory.getAllCustomers(function(output){
    $scope.customers = output;
    console.log(output);
  }) // End Get All Customers


  $scope.removeCustomer = function(id){
    console.log('Remove Button Clicked');
    console.log(id);
    // $scope.id = id
    customerFactory.removeCustomer(id, function(output){
      console.log('Back from factory ----> remove customer');
      console.log(output);
      if(output.error){
        $scope.error = output.error;
      } else {
        $scope.customers = output;
      }
    });
  }





}),


// =========================================================================
// ========================= Products Controller ===========================
// =========================================================================
app.controller('productsController', function($scope, productsFactory, $location){
  $scope.products = [];


  $scope.addNewProduct = function(){
    $scope.error = '';
    console.log('========== Add new Product Button Clicked =========');
    console.log($scope.newProduct);

    productsFactory.addNewProduct($scope.newProduct, function(output){
      console.log('Got this back from the factory');
      console.log(output);
      $scope.products = output;
    })
    $scope.newProduct = {};
  } // End of Add New Message


  productsFactory.getAllProducts(function(output){
    $scope.products = output;
    console.log(output);
  }) // End Get All Products


}); //End of Products Controller


// =========================================================================
// ========================= Dashboard Controller ==========================
// =========================================================================
app.controller('dashboardController', function($scope, productsFactory, customerFactory, $location){
  $scope.product= [];
  $scope.customers = [];

  productsFactory.getAllProducts(function(output){
    $scope.products = output;
    console.log(output);
  }) // End Get All Products


  customerFactory.getAllCustomers(function(output){
    $scope.customers = output;
    console.log(output);
  }) // End Get All Customers



}); //End of Dashboard Controller



// =========================================================================
// ========================== Orders Controller ============================
// =========================================================================
app.controller('ordersController', function($scope, productsFactory, customerFactory, $location){
  $scope.products= [];
  $scope.customers = [];
  $scope.orders = [];


  customerFactory.getAllCustomers(function(output){
    $scope.customers = output;
    console.log(output);
  }) // End Get All Customers

  productsFactory.getAllProducts(function(output){
    $scope.products = output;
    console.log(output);
  }) // End Get All Products



  $scope.placeOrder = function(){
    $scope.error = '';
    console.log('========== Add new Product Button Clicked =========');
    console.log($scope.newOrder);

  }






  // $scope.addNewProduct = function(){
  //   $scope.error = '';
  //   console.log('========== Add new Product Button Clicked =========');
  //   console.log($scope.newProduct);
  //
  //   productsFactory.addNewProduct($scope.newProduct, function(output){
  //     console.log('Got this back from the factory');
  //     console.log(output);
  //     $scope.products = output;
  //   })
  //   $scope.newProduct = {};
  // } // End of Add New Message






}) //End Order Controller
