const configureStripe = require('stripe')
const { models: { Order } } = require('../db');
const stripe = configureStripe(
  'sk_test_51MigRUES3iKSqq49Ka2repuzIGUOs2Cd4HjOFrZY9J5dKWJQ2yGpveH6WfE9DAp43yfYnZUDUxZ0Uoii2A0wB8gE00l2GYGpFC' // secret key
)
const router = require('express').Router()

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({error: stripeErr})
  } else {
    res.status(200).send({success: stripeRes})
  }
}

router.post('/checkout', (req, res, next) => {
  try {
    stripe.charges.create(req.body, postStripeCharge(res))
  } catch (error) {
    next(error)
  }
})

module.exports = router
