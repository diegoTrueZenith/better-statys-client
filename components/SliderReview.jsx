import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'
import ReviewCard from './ReviewCard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { useState, useEffect } from 'react'

function SliderReview({reviews}) {
  return (
    <div className="full_width-slider">
      <div className="full_width_slider-background" />
      <div className="page-container">
        <div className="full_width-slider-item__content__text">
          <div className="Tittle-header">
            <h2>What our Customer Says About Us</h2>
          </div>
          <div className="Subtitle-header">
            <p>
              At The Better Stay, we genuinely believe in overdelivering on value. That’s why we offer luxury, relaxation, and entertainment at affordable pricing. We have had more than 400 happy guests at our properties, and we look forward to serving your family too!
            </p>
          </div>
        </div>
        <div className="buttons__container__SliderReview">
          <div className="hero__nav">
            <button className="hero__nav__button hero__nav__button--left">
              <FaArrowLeft size={24} />
            </button>
            <button className="hero__nav__button hero__nav__button--right">
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="full_width-slider-item__content__review">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            autoHeight={true}
            navigation={{
              nextEl: '.hero__nav__button--right',
              prevEl: '.hero__nav__button--left',
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews?.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SliderReview
