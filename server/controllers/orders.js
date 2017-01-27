const mongoose = require('mongoose');

var Product = mongoose.model('Product');
var User = mongoose.model('User');
var Order = mongoose.model('Order');



module.exports = (function(){
  return {

    newOrder: function(req,res){
      console.log('In the newOrder method  ----> order controler'. yellow);
      console.log(req.body);

      var order = new Order({_user: req.body.customer._id, _product: req.body.product._id, quantity: req.body.quantity});
      console.log('order variable'.yellow);
      console.log(order);

      //Check if amount is in stock
      Product.findOne({_id:req.body.product._id}, function(err, product){
        console.log('=============== Finding Product ==============='.cyan);
        if(err){
          console.log('=============== Error Finding Product ==============='.red);
          console.log(err);
          res.json({error: 'Problem Finding Product'});
        }
        else if (product.quantity < req.body.quantity){
            console.log('======= Requested too many products======='.red);
            console.log(err);
            res.json({error: 'We do not have that many in stock!'});
        } else {
          order.save(function(err){
          // console.log('====== Successfuly Placed Order  ======');
          product.quantity -= req.body.quantity;
          // console.log(product.quantity);
          product.save(function(err){
            if(err){
              console.log('===== Error Saving Product ====='.red);
              res.json({error: 'Error updating store quantity'})
            }
            res.redirect('/orders/all');
          }); //End Product Save
        }); //End Order Save
        }
      });
    },   // End New Order



    all: function(req,res){
      Order.find({}).populate(['_user', '_product']).exec(function(err, orders){
        res.json(orders);
      })
    }, //End Get All


  }
})();
