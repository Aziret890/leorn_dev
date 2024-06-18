'use client'
import React from 'react'
import { useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import arrowRight from '@/assets/images/right-arrow.svg'
import arrowLeft from '@/assets/images/left-arrow.svg'
import arrowLeftOrange from '@/assets/icons/left_orange_arrow.svg'
import Image from 'next/image'

const SwiperBtn = ({ className, className2 }: any) => {
  const swiper = useSwiper()

  return (
    <>
      <button className={className} onClick={() => swiper.slidePrev()}>
        {className === 'service__btn-left' ? (
          <Image src={arrowLeftOrange} alt="arrow_left" />
        ) : (
          <Image src={arrowLeft} alt="arrow_left" />
        )}
      </button>
      <button className={className2} onClick={() => swiper.slideNext()}>
        <Image src={arrowRight} alt="arrow_right" />
      </button>
    </>
  )
}

export default SwiperBtn
