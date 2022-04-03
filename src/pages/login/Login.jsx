import { Link } from 'react-router-dom'
import './Login.scss'

export default function Login() { 
  return (
    <div className="login">
      <h1 className="my-3">DanApp</h1>
      <div className="social">
        <button className="login__button btn btn-white">Sign in with Google</button>
        <button className="login__button btn btn-white">Sign in with Facebook</button>
        <button className="login__button btn btn-white">Sign in with Apple</button>
        <p className='social__divider mb-md text-center'>or</p>
        <button className="login__button btn btn-white">Sign in with Username</button>
      </div>
      <p className='text my-md'>Don't have an account?</p>
      <Link to="/signup">Signup here</Link>
    </div>
    ) 
}