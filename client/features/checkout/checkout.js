import React, { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import history from '../history'
import badge from '../../../public/Imgs/stripe-badge-grey.png';

// const navigate = useNavigate();
const CURRENCY = 'USD';

const errorPayment = data => {
  alert(data)
}

const successPayment = data => {
  alert('Payment Successful')
  history.push('/thankyou')
}

const onToken = async (amount, description, handleCheckoutSuccess, token) => {
  try {
    const { data } = await axios.post('/stripe/checkout', {
      description,
      source: token.id,
      currency: CURRENCY,
      amount
    })
    successPayment(data)
    handleCheckoutSuccess()
  } catch (error) {
    errorPayment(error)
  }
}

const Checkout = ({name, description, amount, handleCheckoutSuccess}) => {

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.location.reload();
    });
    return () => {
      unlisten();
    };
  }, [history]);
  
  return (
    <div className='cart'>
      <StripeCheckout
        name={name}
        description={description}
        amount={amount}
        token={token => onToken(amount, description, handleCheckoutSuccess, token)}
        currency={CURRENCY}
        stripeKey="pk_test_51MigRUES3iKSqq49RCFL9Zqm6dCpUSQFDZYwJyqGG1JqHXperqIXBtNq3XRGbPnxmcebq0vqxSg7PtLTZR8FDAbf00kIqNKWZm"
        label="Pay with 💳"
      />
    <img src={badge} />
    </div>
  )
}

export default Checkout;
