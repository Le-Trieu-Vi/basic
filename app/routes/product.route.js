const express = require("express");
const controller = require("../controllers/product.controller");
const router = express.Router();

router.route('/api/products')
    .get(controller.getAllProduct)
    .post(controller.createProduct);


router.route('/api/products/:id')
    .get(controller.getProduct)
    .patch(controller.updateProduct)
    .delete(controller.deleteProduct);
module.exports = router;