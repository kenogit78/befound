import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';


export const SignInContainer = styled.div`
display: flex;
// height: 100vh;
background: #1EAE98;
padding: 2em 0
display: flex;
justify-content: center;
align-items: center;
`

export const FormContainer = styled.div`
  background: #fff;
  width: 35%;
  display: flex;
  margin: 2em 0;
  flex-direction: column;
align-items: center;
justify-content: center;
padding: 2em;
border-radius: 10px;
box-shadow: 3px 8px 18px -13px rgba(66, 68, 90, 1);

.new{
    font-style: italic;
}
  
`

export const NavLink = styled(Link)`
text-decoration: none;
color: #333;
text-align: center;
margin: 1em 0;

span{
    color: #1EAE98;
}
`

export const GoogleSignIn = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin: 1em 0;
background: #1EAE98;
border-radius: 3px;
box-shadow: 2px 3px 16px -4px rgba(0,255,185,0.75);
padding: 0.5em;
width: 100%;
p{
    padding: 0 0.5em;
    color: #fff;
}

&:hover {
    cursor: pointer;
}
`

export const Input = styled.div`
display: flex;
flex-direction: column;
width: 100%;

form{
display: flex;
flex-direction: column;
width: 100%;
};

input{
    padding: 1em;
    margin: 1em 0;
    flex: 1;
}
`



const SignIn = () => {
    return (
        <>
        <SignInContainer>
           <FormContainer>
           
           <NavLink to='/'>
            <h3> be<span>found</span></h3>
            </NavLink>

            <h1> Login</h1>

            <GoogleSignIn>
                <FcGoogle />
                <p> Login with Google</p>
            </GoogleSignIn>

                or

                <Input> 

                <form action="">

                    <label htmlFor=""> Email</label>
                    <input type="text" 
                    placeholder="Enter your email address"
                    />

                    <label htmlFor=""> Password </label>
                    <input type="text" 
                    placeholder="Enter your password"
                    />
                    <GoogleSignIn>
                       <p> Log In</p>
                    </GoogleSignIn>
                </form>
                
                </Input>

               <p className="new"> New to befound? <NavLink to='/signup'>
               Sign Up  </NavLink>
                    </p>

            </FormContainer>
        </SignInContainer>


        </>
    )
}

export default SignIn
