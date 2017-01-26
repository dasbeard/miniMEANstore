// =========================================================================
// ============================== Require ==================================
// =========================================================================
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

var User = mongoose.model('User');

module.exports = (function(){
  return {

    new: function(req,res){
      console.log('In the Reg method  ----> users controler'. yellow);
      console.log(req.body.name);

      User.findOne({name: req.body.name}, function(err, oneUser){
        if(err){
          console.log('====== Error ======'.red);
        } else {
        if(oneUser){
          console.log('===== ERROR User Already in system =====');
          res.json({error: 'User already in system'})
        } else {
          console.log('====== User is good to go ======'.yellow);
            // Add Customer to database
          var customer = new User({name: req.body.name});
          console.log('customer variable'.yellow);
          console.log(customer);
          customer.save(function(err){
            if(err){
              console.log('====== Error when Registering ======'.red);
              res.json({error: 'Customer name must be at least 3 characters long'})
            } else {
              console.log('====== Successfuly registered ======');
              res.redirect('/customers/all');
            }
          });
        }

        }
      })
    },   // End New

    all: function(req,res){
      User.find({}, function(err, customers){
        if(err){
          console.log('=============== Error Getting All Customers ==============='.red);
          console.log(err);
        } else {
          console.log('=============== All customers ==============='.cyan);
          console.log(customers);
          res.json(customers);
        }
      });
    }, //End Get All 

    remove: function(req,res){
      console.log('===== At User Controller ======'.red);
      console.log(req.body);
      User.remove({_id: req.body.id}, function(err, oneUser){
        if(err){
          console.log('====== Error ======'.red);
          console.log(err);
          res.json({error: 'ERROR. Customer was not removed'})
        }
        res.redirect('/customers/all');
      });
    }, // End Remove


  } //End Return
})();



// ========================== BCRYPT TOOLS ===============================
// Encrypt password before saving
// var pw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));

// Authenticate password
// if(bcrypt.compareSync(req.body.password, oneUser.password)){}
