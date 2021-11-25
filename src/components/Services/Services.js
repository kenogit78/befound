import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../../adapter/axios'


const Services = () => {

    const [offers, setOffers] = useState([]);
  

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('/service')
            setOffers(response.data);
            console.log(response);
            return response;
        }
        fetchData();
    }, []);


const ServiceContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 3em 5em;
    background: #fff9f9;

    h1{
        margin-bottom: 2em;
        font-size: 3em;
        color: #1EAE98;
    }

`
const ServiceCards = styled.div`
    width: 300px;
    height: 400px;
    background: #1EAE98;
    margin-right: 1em;
    border-radius: 10px;
    border: 3px solid #1EAE98;
    flex:1;

    img{
        width: 100%;
    }

    .text{
        padding: 1em;
    }

`
const ServiceItems = styled.div`
    display: flex;

`

return (
    
        <ServiceContainer>

            <h1> Our Services</h1>

            <ServiceItems>
        {
            offers && offers.map((offer) => (
                <ServiceCards>
                    <img src={offer.image} alt="pix" />
                    <div className='text'>
                        <h3> {offer.title} </h3>
                        <p> {offer.about} </p>
                        <p> {offer.cta} </p>
                    </div>
                </ServiceCards>
            ))
        }

</ServiceItems>
    </ServiceContainer>
        
    )
}

export default Services
