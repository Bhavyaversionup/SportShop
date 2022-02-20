import React,{useState,useEffect} from 'react'
import Api from '../Api/Api';

export default function Top(props) {
    const [uok,setuok]=useState([]);
    let getsubject=() =>
    {
      Api.fetchData('main').then((main)=>{
           console.log("review data is"+JSON.stringify(main))
           setuok([...main])
      })
    }
    useEffect(()=>{
       getsubject();
    },[])
  return (

<div className="container">
    <div className="row">
        <div className="col-md-6">
            <h3 id='cio'> {props.heading} </h3>
            <h1> {props.subHeading1} <br/> {props.subHeading2}</h1>
            <small> {props.subHeading3}<br/> {props.subHeading4}</small>
            <p/> <b>page builder:</b><small/> stop worrying about formatting or <br/> desgin our application-builder lets you create the <br/>
                application journeys you envision.
            <small/><p/>
            <p/><b>  Give back initiative :  </b> 
            Narrow down your applications<br/> desgin
            and let the most passionate show off with pre-<br/>screening assignments.
           <p/>
            <button type="button" className="btn btn-info bg-info" >Leran more -</button>
            <br/>
        </div>
        <div className="col-md-6">
            {
                uok.map((item)=>(
            <img src={item.img} 
            width={400} height={300}  alt="..."   id='btn'/>
                ))
}
        </div>
    </div>
   </div>
 

  )
}
