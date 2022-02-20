import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import Api from '../Api/Api'

export default function File() {
const[car,setcar]= useState({})
let stateupdate=(event)=>{
     setcar({
         ...car,
         [event.target.name]: event.target.value
     }

     )
}
let getdata=(event)=>{
    event.preventDefault();
    console.log("hello")
    Api.insertData("user",car).then(() =>{
        console.log("updated ")
    }
    )
}
  return (
    <div>
<Form onSubmit={getdata}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={car.email} onChange={stateupdate}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label >
    <Form.Control type="password" placeholder="Password" name="password" value={car.password} onChange={stateupdate}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>



    </div>
  )
}
