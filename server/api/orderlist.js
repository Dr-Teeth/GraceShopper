const router = require('express').Router();
const { models: { Order } } = require('../db');


router.get('/:userId', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.params.user.id
      }
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { userId, product, quantity } = req.body;
    const { name, price } = JSON.parse(product);
    const order = await Order.create({ userId, productName: name, productPrice: price, quantity });
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
