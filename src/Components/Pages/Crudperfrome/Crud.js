
import React, { useEffect, useState } from 'react'
import { Button,Table } from 'react-bootstrap'
import Api from '../Api/Api'


export default function Crud() {
    const[car,setcar] = useState([]);
    let tablename="enter"
let getcart = () =>{
    console.log("i am ")
Api.fetchData("user").then((cart)=>{
    console.log("insrted"+cart)
    setcar([...cart])

}
)
}
useEffect(() =>{
    getcart();
 }, []);
let datadelete = (id)=>{
    console.log("hello")
   Api.Deleted("user",id).then(()=>{
       console.log("de;ted")
  
}
    )
}
let dataupdate = ()=>{

}
  return (
    <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
      { 
      tablename="enter",
      car.map((item)=>(
    <tr>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td><Button onClick={()=>datadelete(item.id)}>delete</Button>
      <Button onClick={dataupdate}>updated</Button>
      </td>
     
    </tr>
        ))
}
  </tbody>
</Table>

    </div>
  )
}
