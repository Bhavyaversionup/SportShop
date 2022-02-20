import React from "react";
import axios from "axios";
const fetchData =(endpoint)=>
{
    return axios.get(`http://localhost:3004/${endpoint}`).then((data) => {
        // console.log("the data is"+data)
     return data.data
})
}
const insertData = (endpoint,data) =>
{
    return axios.post(`http://localhost:3004/${endpoint}`,data).then((admindata)=>{
    return admindata.data
    })
}
const Deleted=(endpoint,id)=>
{
    return axios.delete(`http://localhost:3004/${endpoint}/${id}`).then((data)=>{
    return data.data
    })
}
export default
{
    fetchData,
    insertData,
    Deleted
}