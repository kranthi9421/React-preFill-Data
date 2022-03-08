import React,{useState,useEffect} from 'react';

import Form from './Form';
import Users from './Users';

function App() {

  const [data,setData] = useState(null)
  
useEffect(()=>{
   const fetchData = async ()=>{
     setData(await Users())
   }
   fetchData()
},[])


  return   data ? <Form preLoadValues={data} /> : <h2>...Loading</h2>
}

export default App