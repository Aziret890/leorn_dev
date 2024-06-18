import { FC } from 'react'
import styles from './Hero.module.scss'

import Carousel from '@/components/ui/Carousel/Carousel'

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__box}>
        <div className="container">
          <div className={styles.hero__wrapper}>
            <h1 className={styles.hero__title}>
              СОЗДАНИЕ САЙТОВ РАЗРАБАТЫВЕМ ЯРКИЕ КРЕАТИВНЫЕ САЙТЫ “ПОД КЛЮЧ”
            </h1>

            <a className={styles.hero__btn} href="tel:+996705121928">
              СВЯЗАТЬСЯ С НАМИ
            </a>
          </div>
        </div>
        <div className={styles.hero__image}>
          <Carousel />
        </div>
      </div>
      <div className={styles.hero__bgWhite}></div>
      <div className={styles.hero__bg}></div>
    </section>
  )
}

export default Hero
