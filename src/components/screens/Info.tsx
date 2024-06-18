import React from 'react'
import Image from 'next/image'
import info1 from '../../assets/images/info1.png'
import info2 from '../../assets/images/info2.png'
import info__pattern1 from '../../assets/images/info__pattern1.png'
import info__pattern2 from '../../assets/images/info__pattern2.png'
import info__element from '../../assets/images/info__element.png'
import center from '../../assets/images/center.png'
import pattern2 from '../../assets/images/pattern2.png'
import Center from '../ui/Center'

const Info = () => {
  return (
    <>
      <section className="container">
        <div className="bigBox">
          <div className="wrap">
            <div className="wrap__box1">
              {' '}
              <h3 className="wrapp__title">История создания студии</h3>
              <p className="wrap__text">
                LiorDev была основана Батыром Осмонкуловым, вдохновлённым идеей
                создавать инновационные и функциональные веб-решения для бизнеса
                и индивидуальных клиентов. С момента основания и до сегодняшнего
                дня, мы стремимся к постоянному развитию, используя последние
                технологии и следуя мировым трендам в дизайне и веб-разработке.
              </p>
            </div>
            <div className="wrap__box2">
              <Image
                src={info__pattern1}
                alt="info1"
                className="wrap__pattern"
              />
              <Image src={info1} alt="info1" className="wrap__img" />
            </div>
          </div>
          <div className="wrap pt1">
            <div className="wrap__box1 pt4">
              <Image
                src={info__pattern2}
                alt="info2"
                className="wrap__pattern2"
              />
              <Image
                src={info__element}
                alt="element"
                className="wrap__element"
              />
              <Image src={info2} alt="info2" className="wrap__img2" />{' '}
            </div>
            <div className="wrap__box2 pt2">
              <h3 className="wrapp__title pt3">Миссия и видение</h3>
              <p className="wrap__text">
                Наша миссия заключается в том, чтобы помогать бизнесу расти и
                достигать новых высот с помощью качественных веб-решений. Мы
                видим себя не просто как исполнителей, а как партнёров наших
                клиентов, стремясь к созданию продуктов, которые будут служить
                долгосрочным успехом и развитием их бизнеса.
              </p>
            </div>
          </div>
          {Center(
            'Информация о команде',
            'В LiorDev мы гордимся нашей командой - группой талантливых и увлеченных профессионалов, объединенных общей целью - создавать веб-решения, которые вдохновляют и вносят реальный вклад в успех наших клиентов. Каждый член команды вносит уникальный вклад в наш коллективный успех, и вот некоторые из ключевых лиц, стоящих за нашими проектами.',
            center,
            pattern2,
            1,
          )}
        </div>
      </section>
    </>
  )
}

export default Info
