const router = require("express").Router();
let Product = require("../models/product");

router.route("/").get((req, res) => {
  Product.find()
    .then((req) => res.json(req))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const newProduct = new Product(req.body);

  newProduct
    .save()
    .then((product) => {
      res.json("Product added!");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
