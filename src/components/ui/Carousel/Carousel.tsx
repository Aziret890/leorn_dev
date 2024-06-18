'use client'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import img from '../../../assets/images/hero_laptop.png'
import styles from './Carousel.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

interface Props {}

const Carousel: FC<Props> = () => {
  const pagination = {
    clickable: true,
    el: '.swiper-pagination',
  }

  return (
    <>
      <div className="carousel">
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          effect={'creative'}
          speed={40}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
          }}
          pagination={pagination}
        >
          <SwiperSlide>
            <Image width={400} height={600} src={img} alt="laptop" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={400} height={600} src={img} alt="laptop" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={400} height={600} src={img} alt="laptop" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-bullet">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  )
}

export default Carousel
