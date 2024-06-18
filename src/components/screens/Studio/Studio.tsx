import type { FC } from 'react'
import styles from './Studio.module.scss'
import lior from '../../../assets/images/lior.dev.svg'
import Image from 'next/image'
import dots from '../../../assets/images/dots.svg'
import optim from '@/assets/icons/optim_studio.svg'
import web from '@/assets/icons/web_studio.svg'
import mob from '@/assets/icons/mob_studio.svg'

const Studio: FC = () => {
  return (
    <section className={styles.studio}>
      <div className="container">
        <h2 className={styles.studio__title}>
          СТУДИЯ ВЕБ-ДИЗАЙНА И РАЗРАБОТКИ
        </h2>
        <div className={styles.studio__wrapper}>
          <Image src={lior} alt="Lior Dev" />
          <Image className={styles.studio__logo} src={lior} alt="Lior Dev" />
          <div className={styles.studio__service}>
            <div className={styles.studio__line}></div>
            <div className={styles.studio__inner}>
              <h3 className={styles.studio__subtitle}>СПЕКТР УСЛУГ</h3>
              <h4 className={styles.studio__subtitle2}>
                Создание сайтов с адаптивным дизайном
              </h4>

              <p className={styles.studio__text}>
                Разработка интернет-проектов с оригинальным дизайном, корректно
                отображаемая на всех возможных устройствах и браузерах.
              </p>

              <div className={styles.studio__df}>
                <p className={styles.studio__advantage}>
                  <Image
                    width={22}
                    height={22}
                    src={optim}
                    alt="optimization"
                  />
                  Оптимизация и SEO
                </p>
                <p className={styles.studio__advantage}>
                  <Image
                    width={22}
                    height={22}
                    src={web}
                    alt="web-разработка"
                  />
                  web - разработка
                </p>
                <p className={styles.studio__advantage}>
                  <Image
                    width={22}
                    height={22}
                    src={mob}
                    alt="mobile- development"
                  />
                  Мобильные приложения
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image className={styles.studio__dots} src={dots} alt="dots" />
        <div className={styles.studio__circle}></div>
      </div>
    </section>
  )
}

export default Studio
