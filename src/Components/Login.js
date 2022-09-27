import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Header from './Header'


const Login = () => {


  return (
    
    
    <div className="text-center container-fluid" >
      <div className="row justify-content-center" >
        <div className="col-md-4 col-sm-6 col-xl-3">
        <Form className="mt-5" >
            
            <h3 > Login </h3>

            <Form.Group controlId="formBasicText" className='mt-5'>
              <Form.Control type="text" placeholder="Enter Your Username"  />
              
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword" className='mt-4' >
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            
            <Button variant="primary" type="submit" className='mt-5' >
              Login
            </Button>
            <br />
            <h5 className='mt-5' >New User?</h5>
            <Button variant="primary" type="button" >
            Sign Up
            </Button>


      </Form>  

        </div>
      </div>
    </div>

  )
}

export default Login