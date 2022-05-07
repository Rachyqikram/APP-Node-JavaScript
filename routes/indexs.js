const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");


const Product = require("../models/login1");
const user = require("../models/compte");
const demande = require("../models/demande");
const { route } = require('express/lib/application');
const { render } = require('express/lib/response');

router.get("/login", (req, res, next) => {
  Product.find()
    .exec()
    .then(docs => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
// router.post("/add", (req, res, next) => {
//   console.log(req.body.username)
//   const product = new Product({
//     name: req.body.username,
//     price: req.body.price
//   });
//   product
//     .save()
//     .then(result => {
//       res.render('dashboard');
//       console.log(result);
//       // res.status(201).json({
//       //   message: "Handling POST requests to /products",
//       //   createdProduct: result
//       // });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

router.post("/register", async (req, res, next) => {
  try {
    let newUser = new user({
      username: req.body.username,
      password: req.body.password,
      passwordcon: req.body.passwordcon
    });
    await newUser.save();
    console.log(newUser);
    res.render("dashboard");
  } catch (err) {
    console.error(err);
    next(err);
  }
});
router.post("/etudiant", async (req, res, next) => {
  try {
    let newdemande = new demande({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      sujet: req.body.sujet,
      entrepise: req.body.entreprise
    });
    await newdemande.save();
    console.log(newdemande);
    res.render('etud')
  } catch (err) {
    console.error(err);
    next(err);
  }
});



// @desc    Login/Landing page
// @route   GET /
router.get('/', (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})
// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

router.get('/responsable', (req, res) => {
  res.render('respo')
})

router.get('/etudiant', (req, res) => {
  res.render('etud')
})

router.get('/jury', (req, res) => {
  res.render('jury')
})




module.exports = router