const router = require('express').Router();
const Sequelize = require('sequelize');
const {
  models: { Products },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const products = await Products.findAll();
    res.send(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.id, {
      attributes: ['id', 'name', 'description', 'price', 'quantity'],
    });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    next(error);
  }
});



router.delete('/:itemId', async (req, res, next) => {
  try {
    const deletedProduct = await Products.findByPk(req.params.itemId);
    deletedProduct.destroy();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});
