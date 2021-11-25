import React from 'react'
import styled from 'styled-components'
import {TiLightbulb} from 'react-icons/ti'
import {GiMoneyStack} from 'react-icons/gi'


const WhyContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: #1EAE98;
padding: 3em 5em;
color: #fff;

h1{
    color:#fff;
    font-size: 3em;
}

p{
    font-size: 1.2em;
}

.promise-content{
    display: flex;
}
.div1{
    margin:4em;
}

.bulb{
    font-size: 6em;

}
`
const Why = () => {
    return (
        <>
            <WhyContainer>
                <h1> Our Promise </h1>
                <p> We've got what it takes to take your business to a wider audience</p>

                <div className='promise-content'>
                    <div className= 'div1'>
                        <h3> Exposure</h3>

                        <TiLightbulb className='bulb' />
                    </div>
                    <div className= 'div1'>
                        <h3> Exposure</h3>

                        <GiMoneyStack className='bulb' />
                    </div>

                </div>




            </WhyContainer>
        </>
    )
}

export default Why
