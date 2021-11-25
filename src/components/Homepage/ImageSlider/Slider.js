import React, {useState, useEffect } from 'react'
import axios from '../../../adapter/axios'
// import { SliderData } from './SliderData';
import './slider.css'

import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos  } from 'react-icons/md';

const Slider = () => {



    const [current, setCurrent] = useState(0);
    const [slides, setSlides] = useState([]);
    const length = slides.length;


    useEffect(() => {
        async function fetchPost() {
            const response = await axios.get('/posts');
            setSlides(response.data);
            
            return response;
           
        }
 
        fetchPost();
      }, []);
      console.log(slides);
     


    const nextSlide = ()=> {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current)
    }
    const prevSlide = ()=> {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
    
        <section className='slider' >
            <MdOutlineArrowBackIos className='left-arrow' onClick={prevSlide}  />
            <MdOutlineArrowForwardIos className='right-arrow' onClick={nextSlide} />
            
            { slides.map((slide, index)=> {
                return (
                    <div className={index === current ? 'slide active' : slide} key={index} >
                        {index === current && (
                            <img src={slide.image} className='image' alt='business people images' />
                        )}
                         
                    </div>
                   
                )
            })}
        </section>
    )
}

export default Slider
