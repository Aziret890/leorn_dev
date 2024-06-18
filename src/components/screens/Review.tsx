import React from 'react'
import center from '../../assets/images/center.png'
import pattern2 from '../../assets/images/pattern2.png'
import Center from '../ui/Center'
import { fetchData } from '../../api/fetchData'

const Review = async () => {
  const rews = await fetchData('review')
  return (
    <section className="container">
      {Center(
        'Отзывы клиентов',
        'Мы гордимся положительными отзывами наших клиентов, которые подтверждают высокое качество нашей работы и профессионализм команды LiorDev.',
        center,
        pattern2,
        2,
      )}
    </section>
  )
}

export default Review
