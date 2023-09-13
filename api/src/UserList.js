
import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
const UserList = () => {
    const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((reponse)=>{

    setData(reponse.data)
    console.log(reponse)
    })


  },[])
  
return (
  <div style={{marginTop: "50px", boxSizing:"border-box", borderBlockStyle:"double", backgroundImage: "linear-gradient(red,lightblue)", padding:"30px",fontsize: "20px", color:"white", textAlign:"center"}}> 
  {data.map((e)=>(<div>name is:{e.name}</div>))}



</div>
)
  

}
export default UserList