const router = require('express').Router();
const { models: { Order } } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll();
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

router.put('/:orderId', async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { quantity } = req.body;
    const order = await Order.findByPk(orderId);
    if (order) {
      order.quantity = quantity;
      await order.save();
      res.json(order);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:orderId', async (req, res, next) => {
  try {
    const { orderId } = req.params;
    await Order.destroy({
      where: {
        id: orderId
      }
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
    try {
      const orders = await Order.findAll({
        where: {
          userId: req.params.userId
        }
      });
      res.json(orders);
    } catch (err) {
      next(err);
    }
})

module.exports = router;
