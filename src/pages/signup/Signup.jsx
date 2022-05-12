import { useState } from 'react'

// style
import './Signup.scss'

export default function Signup() { 
  const [email, setEmail]= useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }
  
  return (
    <div className="signup">
      <h1 className="heading heading-lg my-lg">DanApp</h1>
      <form className="signup__form form-group" onSubmit={handleSubmit}>
        <input 
          type="email" 
          className="form-input"
          placeholder="Enter your Email"
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
          required
        />
      </form>
    </div>
    ) 
}