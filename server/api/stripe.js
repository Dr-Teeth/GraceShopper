const configureStripe = require('stripe')
const { models: { Order } } = require('../db');
const stripe = configureStripe(
  'sk_test_51MigRUES3iKSqq49Ka2repuzIGUOs2Cd4HjOFrZY9J5dKWJQ2yGpveH6WfE9DAp43yfYnZUDUxZ0Uoii2A0wB8gE00l2GYGpFC' // secret key
)
const router = require('express').Router()

const postStripeCharge = async (res) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({error: stripeErr})
  } else {
    res.status(200).send({success: stripeRes})
    Order.findByPk(completed).then(order => {
      order.completed = true;
      order.save(); // Save the changes to the database
    });
  }
}

router.post('/api/stripe/checkout', async (req, res, next) => {
  try {
    const order = await Order.create(req.body); // Create the order in the database
    stripe.charges.create(req.body, postStripeCharge(res, order.id)); // Pass the order ID to the postStripeCharge function
  } catch (error) {
    next(error)
  }
})



module.exports = router
