import React from 'react'
import './otpLogin.css';
import PhoneOtpForm from './PhoneOtpForm';
 
function OtpLogin() {
  return (
    <div className='otpLogin'>
      <h1>OTP LOGIN PROJECT</h1>
      <h3>Login With Phone</h3>
       <PhoneOtpForm/>
    </div>
  )
}

export default OtpLogin