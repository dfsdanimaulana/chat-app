import { Link } from 'react-router-dom'

// style
import './Login.scss'

export default function Login() { 
  return (
    <div className="login">
      <h1 className="heading heading-lg my-lg">DanApp</h1>
      <div className="social">
        <button className="btn btn-white text-start"><i className="bi bi-google mr-sm"></i> Sign in with Google</button>
        <button className="btn btn-white text-start"><i className="bi bi-facebook mr-sm"></i> Sign in with Facebook</button>
        <button className="btn btn-white text-start"><i className="bi bi-apple mr-sm"></i> Sign in with Apple</button>
        <p className='social__divider'>or</p>
        <button className="btn btn-white text-center"><i className="bi bi-person-fill mr-sm"></i> Sign in with Username</button>
      </div>
      <div className="mt-md mb-auto text-center">
        <p className='my-sm fw-9'>Don't have an account?</p>
        <Link to="/signup" className="fw-9 text-link">Signup here</Link>
      </div>
    </div>
    ) 
}