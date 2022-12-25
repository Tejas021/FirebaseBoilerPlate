import React from 'react'
import "./Login.css"
import { db,auth } from '../../firebase'
import {getDocs ,addDoc , query ,collection ,where} from "firebase/firestore"
import {signInWithPopup,GoogleAuthProvider} from "firebase/auth"
const Login = () => {

  const provider = new GoogleAuthProvider()
  const signin = async()=>{


    try{
      const res = await signInWithPopup(auth,provider)
      const user = res.user;
  console.log(user)
      const q = query(collection(db,"users"),where(user.uid,"==","uid"));
  
      const docs = await getDocs(q);
  
      if(docs.docs.length===0){
        await addDoc(collection(db,"users"),{
          name:user.displayName,
          email:user.email,
          uid:user.uid
        })
      }
    }catch(err){
      alert(err)
    }

   

  }

  return (
    <div className='container1'>
      <button className='btn btn-primary text-light button1' onClick={signin}><img style={{height:"20px",width:"20px",marginRight:"5px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png'/>Login with Google</button>
    </div>
  )
}

export default Login
