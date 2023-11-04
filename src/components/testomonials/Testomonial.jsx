import React from 'react'
import "./Testomonial.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, ducimus necessitatibus! Optio dolores asperiores praesentium ex, unde doloribus atque fuga amet. Magni, explicabo? Tempore aspernatur labore eius fugit suscipit sed alias, harum hic illum, voluptatibus at enim, deserunt perspiciatis soluta."
  }, 
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, ducimus necessitatibus! Optio dolores asperiores praesentium ex, unde doloribus atque fuga amet. Magni, explicabo? Tempore aspernatur labore eius fugit suscipit sed alias, harum hic illum, voluptatibus at enim, deserunt perspiciatis soluta."
  }, 
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, ducimus necessitatibus! Optio dolores asperiores praesentium ex, unde doloribus atque fuga amet. Magni, explicabo? Tempore aspernatur labore eius fugit suscipit sed alias, harum hic illum, voluptatibus at enim, deserunt perspiciatis soluta."
  }, 
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, ducimus necessitatibus! Optio dolores asperiores praesentium ex, unde doloribus atque fuga amet. Magni, explicabo? Tempore aspernatur labore eius fugit suscipit sed alias, harum hic illum, voluptatibus at enim, deserunt perspiciatis soluta."
  }, 

]

function Testomonial() {
  return (
    <section id='testomonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {data.map(({avatar, name, review}, index) => {
          return( 
          <SwiperSlide className="testimonial" key={index}>
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>

          )
        })}
      </Swiper>
    </section>
  )
}

export default Testomonial