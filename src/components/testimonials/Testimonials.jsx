import './testimonials.css'
import AVTR1 from '../../assets/joker-avatar-1.jpg'
import AVTR2 from '../../assets/joker-avatar-2.jpg'
import AVTR3 from '../../assets/joker-avatar-3.jpg'
import AVTR4 from '../../assets/joker-avatar-4.png'

import {Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Lorem ipsum',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    avatar: AVTR2,
    name: 'Lorem ipsum',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    avatar: AVTR3,
    name: 'Lorem ipsum',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    avatar: AVTR4,
    name: 'Lorem ipsum',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.'
  },
  ]

const Testimonials = () => {
  return (
    <div className="section" id="testimonials">
    <h5>Reviews from Clients</h5>
    <h2>Testimonials</h2>

    <Swiper 
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
    {
      data.map(item => (
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={item.avatar} />
          </div>
          <h5 className="client__name">{item.name}</h5>
          <small className="client__review">{item.review}</small>
        </SwiperSlide>
      ))
    }
    </Swiper>
    </div>
  )
}

export default Testimonials
