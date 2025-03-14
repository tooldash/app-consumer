/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51QflV3AuDwfZdS4KQftx8TvHZbsLt3iNtVaIIB1h8B1JGNExLGT9JOFfGXUdCLlQtD6jdH47GaJhp24AAkKW19dB00JHDuyUme") // @todo
  }
  return stripePromise
}

export default getStripe