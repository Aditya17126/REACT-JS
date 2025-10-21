import React, { useEffect, useRef, useState } from 'react'

function OtpInput({length = 4, onOtpSubmit = () =>{}}) {
  const [otp , setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if(inputRefs.current[0]){
      inputRefs.current[0].focus();
    }
  }, [])
  

   const handleChange = (idx ,e) => {
     const val = e.target.value;

     if(isNaN(val)) return ;

     const newOtp = [...otp];
     //* allow only one input
     newOtp[idx] = val.substring(val.length - 1);
     setOtp(newOtp);

//      console.log("hello",newOtp , otp);

     const combinedOtp = newOtp.join("");
     if(combinedOtp.length === length){
       onOtpSubmit(combinedOtp);
     }
//    console.log(newOtp , combinedOtp);

 //* Move to next input if current field is filled
     if(val && idx < length -1 && inputRefs.current[idx+1]){
        inputRefs.current[idx + 1].focus();
     }
   }
   const handleClick = (idx) => {
      inputRefs.current[idx].setSelectionRange(1,1);

      //* optional
      if(idx > 0 && !otp[idx-1]){
        inputRefs.current[otp.indexOf("")].focus();
      }
   }

   const handleKeyDown = (idx ,e) => {
    if(e.key === "Backspace" && !otp[idx] && idx > 0 && inputRefs.current[idx -1] ){
       inputRefs.current[idx - 1].focus();
    }
   } 

  return (
    <div>
       {
         otp.map((value , idx)=>{
             return <input 
               key={idx}
               type='text'
               ref = {(input)=> inputRefs.current[idx] = input}
               value={value}
               onChange={(e)=> handleChange(idx , e)}
               onClick={()=> handleClick(idx)}
               onKeyDown={(e)=> handleKeyDown(idx , e)}
               className='otpInput'
             />
         })
       }
    </div>
  )
}

export default OtpInput