import { BrowserRouter, Route, Routes } from 'react-router-dom'

// styles
import './App.scss'

// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      {/*
        <nav>
          <h1>Dan Chat App</h1>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}