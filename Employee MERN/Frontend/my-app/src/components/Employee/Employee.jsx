import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {  Table } from 'semantic-ui-react'
import './Employee.css'
import { Button} from 'semantic-ui-react'

import { Link,Routes,Route,BrowserRouter} from 'react-router-dom'



const Employee = () => {
   
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/employeelist`)
                .then((response) => {
                    setAPIData(response.data);
                })
        
    }, [])

    return (
        <div  className='table'>
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
                    </Table.Row>
                )})}
            </Table.Body>
        </Table>
        </div>
    )
}

export default Employee

