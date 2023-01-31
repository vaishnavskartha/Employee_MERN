import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Update(){
    
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [position,setPosition]=useState('');
    const [location,setLocation]=useState('');
    const [salary,setSalary]=useState('');
    const [id,setID]=useState(null);

    
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setPosition(localStorage.getItem('Position'));
        setLocation(localStorage.getItem('Location'));
        setSalary(localStorage.getItem('Salary'));
        }, []);

        
        
        const updateAPIData = () => {
            axios.put(`http://localhost:5000/api/employeelist`, {
                name,position,location,salary
            }).then(()=>{
                navigate('/Admin');
               })
        }


    return (
        <>
        <div>
        <Form >
        <Form.Field>
                <label>Name</label>
                <input name='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Position</label>
                <input name='designation' placeholder='Position' value={position} onChange={(e)=>setPosition(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Location</label>
                <input name='location' placeholder='Location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Salary</label>
                <input name='salary' placeholder='Salary' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
            </Form.Field>
            <Button type='submit' onClick={updateAPIData} color="blue">Update</Button>
        </Form>
        
        </div>
        </> 
    )
}
export default Update