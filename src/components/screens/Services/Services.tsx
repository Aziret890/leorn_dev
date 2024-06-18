'use client'
import Image from 'next/image'
import React from 'react'
import icon from '@/assets/images/service_icon.svg'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { data } from './serviceElem'
import SwiperBtn from '@/components/ui/SwiperBtn'

const Services = () => {
  const dataElem = data.map((item: any) => (
    <SwiperSlide className="service__slider" key={item.title}>
      <h2 className="service__title">{item.title}</h2>
      <p>{item.descr}</p>
    </SwiperSlide>
  ))

  return (
    <section className="service">
      <div className="container">
        <Image width={100} height={100} src={icon} alt="icon" />

        <Swiper className="service__wrapper">
          {dataElem}

          <SwiperBtn
            className="service__btn-left"
            className2="service__btn-right"
          />
        </Swiper>
      </div>
    </section>
  )
}

export default Services
