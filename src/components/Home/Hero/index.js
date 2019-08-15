import React from 'react';
import imageOne from '../../../assets/img/carousel-photoOne.jpeg';
import imageTwo from '../../../assets/img/carousel-photoTwo.jpeg';
import imageThree from '../../../assets/img/carousel-photoThree.jpeg';
import leftArrow from '../../../assets/img/left.png';
import rightArrow from '../../../assets/img/right.png';

const Hero = () => {

  
  let i = 2

  const handleClick = (x) =>{
    

    if (x === -1) {
      // 2
    let slide = document.querySelectorAll('.Carousel')
      slide[i].style.opacity = 0;


      if(i === 0) {
        i = 3
      }
      i--;

      slide[i].style.opacity = 1;
      
    } else if (x === 1) {
      let slide = document.querySelectorAll('.Carousel')
      slide[i].style.opacity = 0;


      if(i === 2) {
        i = -1
      }
      i++;

      slide[i].style.opacity = 1;
    }

  }

  return (
    <div className="Home__slider">
      
      <div className="Carousel-container">
        <img className="Carousel" src={imageOne} alt="surfing"/>
        <img className="Carousel" src={imageTwo} alt="crystal-blue-surfing"/>
        <img className="Carousel Carousel--starting" src={imageThree} alt="crystal-blue-surfing"/>          
      </div>
      
      <div className="Slider__text">
        <p className="Slider__header">EXPERIENCE THE OCEAN ENTIRELY</p>
        <p className="Slider__header">DIFFERENTLY WITH</p>
        <p className="Slider__header">ARC SURF</p>
      </div>

      <img className="Slider__leftArrow" src={leftArrow} alt="left-arrow" onClick={() => handleClick(-1)}/>
      <img className="Slider__rightArrow" src={rightArrow} alt="right-arrow" onClick={() => handleClick(1)}/>
      
    </div>
  );
}
export default Hero;