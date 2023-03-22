import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name:'Simo KHALIL',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, harum facere quisquam iste consequuntur itaque. Harum consequuntur nihil numquam ratione quisquam explicabo eaque voluptates, ad earum illo esse nobis quibusdam.',
  },
  {
    avatar:AVTR2,
    name:'Simo KHALIL',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, harum facere quisquam iste consequuntur itaque. Harum consequuntur nihil numquam ratione quisquam explicabo eaque voluptates, ad earum illo esse nobis quibusdam.',
  },
  {
    avatar:AVTR3,
    name:'Simo KHALIL',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, harum facere quisquam iste consequuntur itaque. Harum consequuntur nihil numquam ratione quisquam explicabo eaque voluptates, ad earum illo esse nobis quibusdam.',
  },
  {
    avatar:AVTR4,
    name:'Simo KHALIL',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, harum facere quisquam iste consequuntur itaque. Harum consequuntur nihil numquam ratione quisquam explicabo eaque voluptates, ad earum illo esse nobis quibusdam.',
  },
]
export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testimonials__container"
            modules={[ Pagination ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
    >
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide  key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='cleint__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}
