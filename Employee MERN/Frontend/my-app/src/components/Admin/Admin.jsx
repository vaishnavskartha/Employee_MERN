import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react'
import {  Table } from 'semantic-ui-react'
import { Button} from 'semantic-ui-react'
import axios from 'axios';
import { Link,Routes,Route,BrowserRouter } from 'react-router-dom'
import './Admin.css'
  

function Admin() {
 
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/employeelist`)
                .then((response) => {
                    setAPIData(response.data);
                })
        
    }, [])
    
    const setData = (data) => {
        
        let { _id,name,position,location,salary} = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Position',position);
        localStorage.setItem('Location',location);
        localStorage.setItem('Salary',salary);
       
   
    }

    const getData = () => {
        axios.get(`http://localhost:5000/api/employeelist`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (_id) => {
        axios.delete(`http://localhost:5000/api/employeelist/${_id}`)
        .then(() => {
            getData();
        })
    }

  return (
    <div  className='tables'>
        <div>
            <br />
        <Link to='/Create'>
        <Button color='blue'>Add New Employee</Button>
        </Link>
        </div>
        
        <Table>
            <Table.Header>
                <Table.Row>
                    
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Salary</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {APIData.map((data) => {
                    return (
                    <Table.Row>
                        
                        <Table.Cell>{data.name}</Table.Cell>
                        <Table.Cell>{data.location}</Table.Cell>
                        <Table.Cell>{data.position}</Table.Cell>
                        <Table.Cell>{data.salary}</Table.Cell>
                        <Link to='/Update'>
                            <Table.Cell> 
                                <Button color='green' onClick={() => setData(data)}>Update</Button>
                            </Table.Cell>
                        </Link>
                        <Table.Cell> 
                                <Button color='red' onClick={() => onDelete(data._id)}>Delete</Button>
                        </Table.Cell>

                    </Table.Row>
                )})}
            </Table.Body>
        </Table>
        
        
        </div>
        
  )
  
}

export default Admin