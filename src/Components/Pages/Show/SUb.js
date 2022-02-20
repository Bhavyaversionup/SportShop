import React, {useState,useEffect}from 'react'
import Api from '../Api/Api';

export default function SUb() {
    const [uok,setuok]=useState([]);
  let getsubject=() =>
  {
    Api.fetchData('heding').then((heding)=>{
         console.log("review data is"+JSON.stringify(heding))
         setuok([...heding])
    })
  }
  useEffect(()=>{
     getsubject();
  },[])
  return (
    <div>
        <div className='container-fluid'>
     
        <div class="row">
        {      
uok.map((item)=>(
            <div class="col-md-3" id="low">
                <h5>{item.heading}</h5>
                <p>{item.name}</p>
            </div>
))
}
</div>
</div>



    </div>
  )
}
