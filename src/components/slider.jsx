import React from 'react';

import Slider from "react-slick";

function SliderPratice() {

    var settings={
        dots:true,
        infinte:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        loop:true,
    }
    return ( 
        <div className="slider-container" style={{backgroundColor:"green",textAlign:"center",color:"#fff"}}>
        <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      </div>
     );
}

export default SliderPratice;