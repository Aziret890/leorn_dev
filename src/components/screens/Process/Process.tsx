import type { FC } from 'react'
import styles from './Process.module.scss'
import Image from 'next/image'
import design from '../../../assets/images/ux-ui.png'
import { elems } from './elems'
const Process: FC = () => {
  const elemsList = elems?.map(({ title, img }) => (
    <li className={styles.process__item} key={title}>
      <Image src={img} alt={title} />
      <p className={styles.process__text}>{title}</p>
    </li>
  ))

  return (
    <section className={styles.process}>
      <div className="container">
        <div className={styles.process__wrapper}>
          <div className={styles.process__plan}>
            <h2>ВИЗУАЛИЗАЦИЯ УСПЕХА</h2>
            <h3>НАШ ПРОЕКТНЫЙ ПРОЦЕСС</h3>

            <p className={styles.process__text}>
              Понимание того, что вы создаете, почему это создается и как мы
              собираемся использовать опыт вашего бренда с помощью нашего
              экспертного UX / UI-дизайна. Каждый этап нашего проектного
              процесса призван обеспечить четкие и краткие результаты и служить
              вехой на пути к следующему этапу прогресса.
            </p>

            <ul className={styles.process__list}>{elemsList}</ul>
          </div>
          <Image className={styles.process__img} src={design} alt="design" />
        </div>
      </div>
    </section>
  )
}

export default Process
