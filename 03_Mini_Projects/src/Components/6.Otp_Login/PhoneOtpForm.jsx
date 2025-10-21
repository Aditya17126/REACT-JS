import React, { useState } from "react";
import OtpInput from "./OtpInput";

function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false)

  const handlePhoneNumber = (event)=>{
    setPhoneNumber(event.target.value)
  }
  const handlePhoneSubmit = (event)=>{
     event.preventDefault();

     //phone Validation
     const regex = /[^0-9]/g;

     if(phoneNumber.length < 10  || regex.test(phoneNumber) ){
       alert("Invalid Phone Number")
       return;
     }
    //Call an api 
    //Show OTP INPUT feild
     setShowOtpInput(true);
  }

const onOtpSubmit = (otp)=>{
   console.log("Login Succesful 🤩🤩")
}

  return (
    <div>
      {!showOtpInput ? (<form onSubmit={handlePhoneSubmit}>
        <input 
           type="text" 
           value={phoneNumber} 
           onChange={handlePhoneNumber}
           placeholder="Enter Phone Number" 
        />
        <button type="submit">Submit</button>
      </form>) : (
         <div>
            <h1>Enter Otp Sent to {phoneNumber}</h1> 
          
           <OtpInput length={4} onOtpSubmit ={onOtpSubmit}/>
         </div>
      )}
    </div>
  );
}

export default PhoneOtpForm;
