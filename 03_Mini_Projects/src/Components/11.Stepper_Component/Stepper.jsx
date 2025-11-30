import React from 'react'
import CheckOutStepper from './CheckOutStepper'
import './stepper.css'

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has been delivered.</div>,
  },
];

function Stepper() {
  return (
    <div className = "stepper_Container">
        <h1>Stepper</h1> 
       <h1>Checkout</h1>
       <CheckOutStepper stepsConfig={CHECKOUT_STEPS}/>
    </div>
  )
}

export default Stepper