import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CreateNews from './Components/CreateNews'
import Dashboard from './Components/Dashboard'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import Login from './Components/Login'
import ReadNow from './Components/ReadNow'
import Register from './Components/Register'

const App = () => {
  return (
    <div>
      <Header />
      



  

          {/* <Link to='/'>Homepage</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/createnews'>Create News</Link>
          <Link to='/readnow'>Read Now</Link>
          <Link to='/dashboard'>Dashboard</Link> */}

        <Routes>
          
                <Route path='/' element={<Homepage />} />
                <Route path= '/login' element={<Login />} />
                <Route path= '/register' element={<Register />} />
                <Route path= '/readnow' element={<ReadNow />} />
                <Route path= '/createnews' element={<CreateNews />} />
                <Route path= '/dashboard' element={<Dashboard />} />
              
        </Routes>
  


      <Footer />

    </div>
  )
}

export default App