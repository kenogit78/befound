import React from 'react'
// import styles from './homepage.module.css'
import styled from 'styled-components'

import Services from '../Services/Services'
import Why from '../Why/Why'
import Slider from './ImageSlider/Slider'
import { SliderData } from './ImageSlider/SliderData'

const HomeContainer = styled.div`
display: flex;
height: 90vh;
background: #fff9f9;
`

const HomeText = styled.div`
 flex: 1;
 padding: 10em 6em 2em 5em;


 h1{
     font-size: 3em;
     color: #1EAE98;
     
 }


`

const Input = styled.div`
display: flex;
margin-top: 2em;


input{
    padding: 1em;
    margin-right: 1em;
    flex: 1;
}
`

const NavTrial = styled.div`
background: #1EAE98;
border-radius: 3px;
// box-shadow: 2px 3px 24px 8px rgba(0,255,185,0.75);
padding: 0.6em 0;
width: 30%;
text-align: center;


p{
    padding: 0 0.2em;
    color: #fff;
    font-size: 1.2em;
}
`
const HomeImage = styled.div`
flex:1;
`




const Homepage = () => {

  
    return (
        <>
        
        <HomeContainer>

            <HomeText>
                <h1> Build your online business</h1>
                <h1> Make your business found</h1>
                
                <Input> 

                <NavTrial>
                 <p> Get Started</p>
                 </NavTrial>
                </Input>
                
            </HomeText>

            <HomeImage>
                <Slider slides={SliderData} />
            </HomeImage>
        </HomeContainer>

        <Why />
        <Services />
        </>
    )
}

export default Homepage
