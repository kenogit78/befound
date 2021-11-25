import React, { useState } from 'react'
import axios from "../../adapter/axios"
import {
    SignInContainer,
    FormContainer,
    NavLink,
    Input,
   
} from './SignIn';

const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event)=>{
      event.preventDefault();

      const userDetails = {
        email,  
        firstName,
          lastName,
          password
      }
console.log(userDetails);
     
      axios.post('/signup', userDetails)
      .then(response => console.log(response.data))
    }


    

    return (
        <div>
            <SignInContainer>
           <FormContainer>
           
           <NavLink to='/'>
            <h3> be<span>found</span></h3>
            </NavLink>

            <h1> Create an account</h1>

                <Input> 

                <form onSubmit={handleSubmit}>

                    <label htmlFor=""> Email</label>
                    <input type="text" onChange={ e => setEmail(e.target.value)  }
                
                    placeholder="Enter your email address"
                    
                    />

                    <label htmlFor=""> First Name </label>
                    <input type="text" 
                    placeholder="Enter your first name"
                    onChange={ e=> setFirstName(e.target.value) }
                    />
                    <label htmlFor=""> Last Name </label>
                    <input type="text" 
                    placeholder="Enter your last name"
                    onChange={ e=> setLastName(e.target.value) }
                    />
                    <label htmlFor=""> Password </label>
                    <input type="text" 
                    placeholder="Enter your password"
                    onChange={ e => setPassword(e.target.value) }
                    />
                    {/* <label htmlFor=""> Confirm new password </label>
                    <input type="text" 
                    placeholder="Confirm your password"
                    /> */}

                   
                   <button > Create Account </button>    
                   
                    
                </form>
                
                </Input>

               <p> New to befound? Sign Up</p>

            </FormContainer>
        </SignInContainer>
            
        </div>
    )
}

export default SignUp
