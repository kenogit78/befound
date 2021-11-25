import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 4em;
height: 80px;
position: sticky;
top: 0;
z-index: 10;
background: #fff9f9;
box-shadow: 3px 8px 18px -13px rgba(66, 68, 90, 1);


span{
    color: #1EAE98;
}
`
const NavMenu = styled.ul`
display: flex;
width: 22%;
color: #333;
align-items: center;
`
const NavItem = styled.li`
list-style: none;

`
const NavLink = styled(Link)`
text-decoration: none;
margin-right: 1em;
color: #333;

`

const NavTrial = styled.div`
background: #1EAE98;
border-radius: 3px;
box-shadow: 2px 3px 16px -4px rgba(0,255,185,0.75);
padding: 0.5em;
p{
    padding: 0 0.5em;
    color: #fff;
}
`


const Navbar = () => {


    return (
       <NavContainer>
            <NavLink to='/'>
            <h3> be<span>found</span></h3>
            </NavLink>
           <NavMenu>
             <NavItem>
                 <NavLink to='/signin'> Log in</NavLink>
             </NavItem>
             <NavItem>
                 <NavLink to='/register'> Register</NavLink>
             </NavItem>
             
             <NavTrial>
                 <p> Start Free Trial </p>
             </NavTrial>
           </NavMenu>

     </NavContainer>
    )
}

export default Navbar
