const express = require('express');
const router = express.Router();
const { User, Product } = require('../db/models');

// Add a product to the user's cart
router.post('/:productId', async (req, res, next) => {
  try {
    const { user } = req;
    const { productId } = req.params;
    const { quantity } = req.body;

    const currentUser = await User.findByPk(user.id);
    const product = await Product.findByPk(productId);

    await currentUser.addProduct(product, { through: { quantity } });

    const updatedUser = await User.findByPk(user.id, {
      include: [{ model: Product, as: 'carts' }],
    });

    res.status(200).json(updatedUser.carts);
  } catch (err) {
    next(err);
  }
});

// Remove a product from the user's cart
router.delete('/:productId', async (req, res, next) => {
  try {
    const { user } = req;
    const { productId } = req.params;

    const currentUser = await User.findByPk(user.id);
    const product = await Product.findByPk(productId);

    await currentUser.removeProduct(product);

    const updatedUser = await User.findByPk(user.id, {
      include: [{ model: Product, as: 'carts' }],
    });

    res.status(200).json(updatedUser.carts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
