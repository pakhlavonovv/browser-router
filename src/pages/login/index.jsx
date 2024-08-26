import { useState } from 'react'
import './style.css'

const Index = () => {
    const [form, setForm] = useState({})
    const handleChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }
    const handleSubmit = () => {
        event.preventDefault();
    }
  return (
    <>
    <div className="background">
      <div className="shape" />
      <div className="shape" />
    </div>
    <form onSubmit={handleSubmit}>
      <h3 className='form_title'>Login Here</h3>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" name  ="username" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" name    ="password" onChange={handleChange}/>
      <br />
      <button type='submit'>Log In</button>
      <div className="social">
        <div className="go">
          <i className="fab fa-google" /> Google
        </div>
        <div className="fb">
          <i className="fab fa-facebook" /> Facebook
        </div>
      </div>
    </form>
  </>
  
  )
}

export default Index