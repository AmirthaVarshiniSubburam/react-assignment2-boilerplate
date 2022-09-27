import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Register = () => {
  return (
    <div className="text-center container-fluid" >
      <div className="row justify-content-center" >
        <div className="col-md-4 col-sm-6 col-xl-3">
        <Form className="mt-5" >
            
            <h3 > Sign Up </h3>

            <Form.Group controlId="formBasicText" className='mt-5'>
              <Form.Control type="text" placeholder="Username" />
              
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword" className='mt-4' >
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            

            <Form.Group controlId="formBasicPassword" className='mt-4' >
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit" className='mt-5' >
              Sign Up
            </Button>
            <br />
            <h5 className='mt-5' >Already having an account?</h5>
             <Button variant="primary" type="button" >
              Back to Login
            </Button>
              

      </Form>  

        </div>
      </div>
    </div>
  )
}

export default Register