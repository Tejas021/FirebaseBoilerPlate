import React from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
const Home = ({todos}) => {
  return (
    <div className='container'>
<button onClick={()=>signOut(auth)}>Signout</button>


    <h1 className='p-5 text-center'>Task Dashboard</h1>

    <Form/>


    <div className='d-flex p-5 flex-wrap justify-content-between '>
    {console.log(todos)}
   {
    todos.data?.map((t)=><Card name={t.name} />)
   }
    
    </div>

 
    </div>
  )
}

export default Home
