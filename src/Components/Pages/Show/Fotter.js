import React,{useState,useEffect} from 'react'
import Api from '../Api/Api.js';

export default function Fotter() {
    const [car,setcar]=useState([]);
  let getcart=() =>
  {
    Api.fetchData('picture').then((picture)=>{
         console.log("review data is"+JSON.stringify(picture))
         setcar([...picture])
    })
  }
  useEffect(()=>{
     getcart();
  },[])
  return (
    <div className='container-fluid'>
 <div class="row">
 {
    car.map((items)=>(  
        <div class="col" id="low">  
            <img src={items.img} id='img1'/>
            </div>

    ))
}
        </div>
        </div>
  )
}
