'use client'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import SwiperBtn from '../SwiperBtn'
import cube from '@/assets/images/cube.svg'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules'
import { ICommentsResponse } from '@/types/types'

const CommentsList = ({ data }: { data: ICommentsResponse[] }) => {
  const [isLastSlide, setIsLastSlide] = useState(false)
  const [slidesPerView, setSlidesPerView] = useState(3)

  const handleResize = () => {
    const width = window.innerWidth
    if (width < 600) {
      setSlidesPerView(1)
    } else if (width >= 600 && width < 900) {
      setSlidesPerView(2)
    } else {
      setSlidesPerView(3)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const groupComments = (data: any[]) => {
    const groupedComments = []
    for (let i = 0; i < data.length; i += slidesPerView) {
      groupedComments.push(data.slice(i, i + slidesPerView))
    }
    return groupedComments
  }

  const groupedComments = groupComments(data)

  const pagination = {
    clickable: true,
    el: '.swiper-pagination',
  }

  const slides = groupedComments.map((group: any, index: number) => (
    <SwiperSlide className="comments__swiper-slide" key={index}>
      <div className="comments__slide">
        {group.map((comment: any) => (
          <div key={comment.id} className="comments__item">
            <p>{comment.text}</p>
            <div className="comments__wrapper">
              <div className="comments__inner">
                <Image src={cube} alt="cube" />
                {comment.photo && (
                  <Image
                    width={100}
                    height={100}
                    className="comments__avatar"
                    src={comment.photo}
                    alt="avatar"
                  />
                )}
              </div>

              <div>
                <p>{comment.name}</p>
                <p>{comment.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SwiperSlide>
  ))

  const onSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd)
  }

  return (
    <div className="comments__slider container">
      <Swiper
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        onSlideChange={onSlideChange}
        loop={true}
        spaceBetween={20}
        pagination={pagination}
        slidesPerView={slidesPerView}
      >
        {slides}
        <SwiperBtn
          className="comments__btn-left"
          className2="comments__btn-right"
        />
        <div className="comments__pagination">
          <div className="comments__swiper-bullet swiper-bullet">
            <div className="comments__swiper-pagination swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default CommentsList
