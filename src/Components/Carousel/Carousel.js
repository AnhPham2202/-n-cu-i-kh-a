import React, { useState } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
// import 'lity/dist/lity' 
import logo from './../../assets/img/logo.png'

export default function Carousel(props) {
  let infoArr = [
    { class: `bg1`, href: 'https://www.youtube.com/watch?v=kEgUgrh2rdA' },
    { class: `bg2`, href: 'https://www.youtube.com/watch?v=4zYGlqyCVk4' },
    { class: `bg3`, href: 'https://www.youtube.com/watch?v=T36HGZagV5w' },
    { class: `bg4`, href: 'https://www.youtube.com/watch?v=kJcfrHDTSEQ' },
    { class: `bg5`, href: 'https://www.youtube.com/watch?v=iCw-LfLw_Zk' }
  ]
  let renderCarousel = () => {
    return infoArr.map((obj, index) => {
      return (
        <div id='carousel' key={index} className={`carousel__item ${obj.class}`}>
          <div>
            <a data-lity href={obj.href}>
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      )
    })




  }
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  return (
    <div id="carousel" className="slick-carousel">
      <Slider {...settings} >
        {renderCarousel()}
      </Slider>
    </div>
  )
}







// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
