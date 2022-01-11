import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { sliderItems } from '../data'

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
  function handleClick (direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      console.log("left clicked")
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
    return (
        <div className='slider-container'>
            <div className="arrow" style={{
                left: '10px'
            }} onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </div>
            <div className="slide-content" style={{
                transform: `translateX(${(slideIndex * -100)}vw)`
            }}>
            {sliderItems.map((items)=>(
            <div className="slider-wrapper" style={{backgroundColor: '#' + items.bg}} key={items.id}>
                <div className="slider-img">
                    <img src={items.img} alt='bannerimage'></img>
                </div>
                <div className="slider-text">
                    <h1>{items.title}</h1>
                    <p>{items.desc}</p>
                    <button>SHOW NOW</button>
                </div>
            </div>
            ))}
            </div>
            <div className="arrow" style={{
                right: '10px'
            }} onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </div>
        </div>
    )
}

export default Slider
