import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'
import './Create.css'

import { useNavigate } from 'react-router-dom'

function Create(){
    
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [position,setPosition]=useState('');
    const [location,setLocation]=useState('');
    const [salary,setSalary]=useState('');
    const sendDataToApi=()=>{
        var token=sessionStorage.getItem("userToken");
        axios.post('http://localhost:5000/create',
       { name,position,location,salary,token}).then((response)=>{

        if(response.data.status==="Unauthorised user")
        {
        alert("Login first");
        navigate('/')
        }
        else
        {
          if(response.data.status=="success")
          {
            alert("Employee added successfully");
              navigate('/Admin');
          }
          else
          {
            alert("something went wrong");
          }
        }
    })
}

        
    return (
        <>
        <div>
        <Form className='form'>
            <Form.Field>
                <label>Name</label>
                <input name='name' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Position</label>
                <input name='designation' placeholder='Position' onChange={(e)=>setPosition(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Location</label>
                <input name='location' placeholder='Location' onChange={(e)=>setLocation(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Salary</label>
                <input name='salary' placeholder='Salary' onChange={(e)=>setSalary(e.target.value)}/>
            </Form.Field>
            <Button type='submit' onClick={sendDataToApi} color='blue'>Submit</Button>
        </Form>
        </div>
        </> 
    )
}
export default Create