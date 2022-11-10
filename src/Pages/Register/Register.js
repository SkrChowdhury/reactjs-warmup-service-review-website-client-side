import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';





const Register = () => {

    const [passwordError,setPasswordError]=useState('')
    const[success,setSuccess]=useState(false)

    const {createUser,signInWithGoogle}=useContext(AuthContext)

    const handleSubmit=event=>{

        event.preventDefault()
        setSuccess(false)  
        const form=event.target
        
        const name=form.name.value
        const email=form.email.value 
        const password=form.password.value 
        console.log(name,email,password)


        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){

          setPasswordError('Please provide atleast two uppercase character')
          return
          
          }
    if(password.length<8){
    
      setPasswordError('Please provide 8 char')
    
      return
    }
    setPasswordError('')


    
    createUser(email,password)
    .then(result=>{
    
    const user=result.user
    setSuccess(true)

    console.log('registered user:', user)
    form.reset()
    
    
    })
    
    .catch(error=>{
    
      console.error('error:',error)
    setPasswordError(error.message)
    
    
    })
    
    
    
    }

const handleGoogleSignIn=()=>{

signInWithGoogle()
.then(result=>{

const user=result.user

console.log(user)

})
.catch(error=>console.error(error))


}









    return (
        <div>
            
            <div>
            <h3 className='text-center text-danger'>Register Now.</h3>
            <Form className='container w-50 border rounded' onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control  name='name' type="text" placeholder="Enter your full name." />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control  name='name' type="text" placeholder="Enter your photo url." />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  name='email' type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  name='password' type="password" placeholder="Password" />
        <p className='text-danger'>{passwordError}</p>
        {success && <p className="text-success">User created successfully</p>}
      </Form.Group>
      <div>

      <Link to="/login"><button type="button" class="btn btn-link">Already have an account?</button></Link>
      
      
      </div>
      
      <Button variant="primary" type="submit"  >
       Register
      </Button>
      <div>

      <button  onClick={handleGoogleSignIn}   type="button" className="mt-3 btn btn-secondary btn-lg">Register with Google</button>

      
      </div>
     
    </Form>
   
   
        </div>




        </div>
    );
};

export default Register;