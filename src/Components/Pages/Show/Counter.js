import React, { useState } from 'react'
import {Button } from 'react-bootstrap'
export default function Counter() {
const[car,setcar]= useState(0);
let change =()=>{
    if(car>=10)
    {
        car=10 ;
    }
    else
    {
    setcar(car+1)
    }
}
let change1 =()=>{
    
        if(car <= 0)
        {
            car = 0
        }
        else{
            setcar(car-1)
        }
    }
return (
    <div>

 <Button  onClick={change}>Click </Button>
 {car}
 <Button  onClick={change1}>decrese </Button>
    </div>
  )
}
