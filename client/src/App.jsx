import { useState,useEffect } from 'react'
import axios from "axios"
import './App.css'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from '../firebase'


function App() {
  const [user,loading,error] = useAuthState(auth)
  
const [todos ,setTodos] = useState([])

 useEffect(()=>{
  const resp = axios.get("http://localhost:3000/task/getTask")
  .then(res=>setTodos(res))
 },[])

  return (
      <Router>
      <Routes>
      <Route exact path ="/" element = {user?<Home todos={todos}/>:<Login/>}/>
      
     
      </Routes>
      </Router>
  )
}

export default App
