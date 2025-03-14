import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

// @todo turn into util
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51QflV3AuDwfZdS4KQftx8TvHZbsLt3iNtVaIIB1h8B1JGNExLGT9JOFfGXUdCLlQtD6jdH47GaJhp24AAkKW19dB00JHDuyUme")
  }
  return stripePromise
}

const Checkout = cart => {
    console.log("cart:");
    console.log(cart);
    
    const arrayFromObject = Object.keys(cart).map((key) => ({
        ...cart[key],
        key: key, // Optional: include the original key as a property
      }));
      
      console.log(arrayFromObject);

      const lineItems = [];

      arrayFromObject.forEach((item) => {
        lineItems.push({"price": item.stripe_price_id, "quantity": item.quantity});
      });

      console.log("lineItems:");
      console.log(lineItems);


  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: lineItems,
    //   lineItems: [{ price: "price_1QlviCAuDwfZdS4KYY6K3Y1Y", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      CHECKOUT
    </button>
  )
}

export default Checkout;