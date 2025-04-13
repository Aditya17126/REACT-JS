import React from 'react'
import "./CSS/Login.css"
import { auth, provider } from './Firebase'
import { Button } from '@mui/material'
import { login } from './userSlice'
import { useDispatch } from 'react-redux'
import { signInWithPopup } from 'firebase/auth'

function Login() {
  const dispatch = useDispatch();

  const signIn =function(){
    signInWithPopup(auth , provider).then(({user}) =>{
      dispatch(login({
          displayName : user.displayName,
          email:user.email,
          photoUrl:user.photoURL
      }))
    })
    .catch(function(error){
      alert(error.message);
    })
  }

  return (
    <div className='login'>
       <div className="login_container">
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?size=690:388" alt="" />
         
         <Button variant='contained' color='primary'  onClick={signIn}>Login </Button>
       </div>
    </div>
  )
}

export default Login


