import React from 'react'
import Head from '../../components/ui/Head'
import head from '../../assets/images/portfolio/head.png'
import Collage from '../../components/screens/Collage'
import Review from '@/components/screens/Review'
import Comments from '@/components/screens/Comments/Comments'
import Questions from '@/components/screens/Questions/Questions'
import Center from '@/components/ui/Center'
import center from '@/assets/images/center.png'
import pattern2 from '@/assets/images/pattern2.png'
const page = () => {
  return (
    <>
      {Head(head, 'ПОРТФОЛИО', 'LIOR DEV', 2)}
      <Collage />
      {Center(
        'Информация о команде',
        'В LiorDev мы гордимся нашей командой - группой талантливых и увлеченных профессионалов, объединенных общей целью - создавать веб-решения, которые вдохновляют и вносят реальный вклад в успех наших клиентов. Каждый член команды вносит уникальный вклад в наш коллективный успех, и вот некоторые из ключевых лиц, стоящих за нашими проектами.',
        center,
        pattern2,
        2,
      )}
      <Comments />
      <Questions title="" />
    </>
  )
}

export default page
