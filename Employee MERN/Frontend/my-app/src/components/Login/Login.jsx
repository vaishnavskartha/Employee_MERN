import React from 'react'
import { Button,Form} from 'semantic-ui-react'
import { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Login() {
    
  const navigate=useNavigate();
  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const authenticate =()=>{
    const userData=
    {
      "username":username,
      "password":password
    }
    console.log(userData)
    axios.post(`http://localhost:5000/login`,
    userData
    ).then((response)=>{

      console.log(response.data)
  
      if (response.data.status=="success") {
  
          let token=response.data.token
          // let userId=response.data.data[0]._id
          // alert("valid user")
          // alert("userId => "+userId)
          // alert("token => "+token)
  
          sessionStorage.setItem("userToken",token)
          // sessionStorage.setItem("userId",userId)
          if(username=="Admin")
            {
              navigate("/Admin")
          }                                                         //Admin LOGin username : Admin password : 12345
          else{                                                     //Employee LOGin username : Vaishnav password : vaishnav
              navigate("/Employee")
          }
  
  
  
          
      } else {
          alert("Invalid user")
   
      }
     
     })
    }
  return (
    <>
    <div>
    <Form className='login'>
            <h3>Log In</h3>
            <br />
            <Form.Field>
                <label>Username</label>
                <input name='username' placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
            </Form.Field>
            <br />
            <Form.Field>
                <label>Password</label>
                <input name='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
            </Form.Field>
            <br />
            <br />
            <Button type='submit'color='blue' onClick={authenticate} >Log in</Button>
        </Form>
        </div>
     </>
  )
}

export default Login