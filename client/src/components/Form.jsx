import React from 'react'

function Form() {




  return (
    <form className='form-control py-3' >

    
      <input className='form-control' placeholder='Task Name'/>
      <textarea className='form-control mt-3' placeholder='Description'></textarea>


      <button className='btn btn-success px-5 py-2 mt-3'>Add</button>
    </form>
  )
}

export default Form
