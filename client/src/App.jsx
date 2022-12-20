import { useState } from 'react'
import axios from "axios"
import './App.css'
import Form from './components/Form'
import Card from './components/Card'

function App() {
  
  useState(()=>{
    axios.get("http://localhost:3000/task/").then(res=>res.data).then(res=>console.log(res.name))
  },[])

  return (
    <div className='container'>



    <h1 className='p-5 text-center'>Task Dashboard</h1>

    <Form/>


    <div className='d-flex p-5 flex-wrap justify-content-between '>
    
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    
    </div>

 
    </div>
  )
}

export default App
