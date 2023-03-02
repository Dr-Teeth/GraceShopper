const router = require('express').Router();
const Sequelize = require('sequelize');
const {
  models: { Products },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const products = await Products.findAll({
      attributes: ['name', 'description', 'price', 'quantity'],
      group: ['name', 'description', 'price', 'quantity'],
    });
    res.send(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:name', async (req, res, next) => {
  try {
    const product = await Products.findAll({
      where: {
        name: {
          [Sequelize.Op.eq]: req.params.name,
        },
      },
      attributes: ['name', 'description', 'price', 'quantity'],
    });
    res.status(200).json(product);
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