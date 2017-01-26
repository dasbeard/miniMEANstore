// =========================================================================
// ========================= Required Models ===============================
// =========================================================================
var users = require('./../controllers/users.js');
var products = require('./../controllers/products.js');

module.exports = function(app){
// =========================================================================
// =========================== User Routes =================================
// =========================================================================
  app.post('/customers/new', function(req,res){
    users.new(req,res)
  });

  app.get('/customers/all', function(req,res){
    users.all(req,res)
  });

  app.post('/customers/remove', function(req,res){
    users.remove(req,res)
  });


// =========================================================================
// ========================== Products Routes ==============================
// =========================================================================
  app.get('/products/all', function(req,res){
    products.all(req, res);
  });

  app.post('/products/new', function(req,res){
    products.addProduct(req,res);
  });


}; // End Routes
