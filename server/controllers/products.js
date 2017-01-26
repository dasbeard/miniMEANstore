const mongoose = require('mongoose');

var Product = mongoose.model('Product');


module.exports = (function(){
  return {

    addProduct: function(req,res){
      console.log('In the Reg method  ----> users controler'. yellow);
      console.log(req.body);

        // Add Product to database
      var product = new Product({name: req.body.name, image: req.body.image, description: req.body.description, quantity: req.body.quantity});
      console.log('product variable'.yellow);
      console.log(product);
      product.save(function(err){
        if(err){
          console.log('====== Error when Registering ======'.red);
          res.json({error: 'Product name must be at least 2 characters long'})
        } else {
          console.log('====== Successfuly Added Product ======');
          res.redirect('/products/all');
        }
          });

    },   // End New

    all: function(req,res){
      Product.find({}, function(err, products){
        if(err){
          console.log('=============== Error Getting All Products ==============='.red);
          console.log(err);
          res.json({error: 'Problem getting all products'});
        } else {
          console.log('=============== All products ==============='.cyan);
          console.log(products);
          res.json(products);
        }
      });
    }, //End Get All


  }
})();
