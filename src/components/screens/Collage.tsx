import React from 'react'
import Image from 'next/image'
import { fetchData } from '../../api/fetchData'
import elements1 from '../../assets/images/portfolio/elements1.png'
import pattern1 from '../../assets/images/portfolio/pattern1.png'
import img1 from '../../assets/images/portfolio/img1.png'
import img2 from '../../assets/images/portfolio/img2.png'
import img3 from '../../assets/images/portfolio/img3.png'
import img4 from '../../assets/images/portfolio/img4.png'
import img5 from '../../assets/images/portfolio/img5.png'
import img6 from '../../assets/images/portfolio/img6.png'
import img7 from '../../assets/images/portfolio/img7.png'
import img904 from '../../assets/images/portfolio/img904.png'
import line2 from '../../assets/images/portfolio/Line2.png'
import line3 from '../../assets/images/portfolio/Line3.png'
import line6 from '../../assets/images/portfolio/Line6.png'
import lineW from '../../assets/images/portfolio/LineW.png'
import line901 from '../../assets/images/portfolio/line901.png'
import cub1 from '../../assets/images/portfolio/cub1.png'
import cub2 from '../../assets/images/portfolio/cub2.png'
import pattern450 from '../../assets/images/portfolio/pattern450.png'

const Collage = async () => {
  const portfolio = await fetchData('portfolio')
  return (
    <div className="container">
      <div className="collage__box1">
        <div className="box1__pd">
          <Image
            src={elements1}
            alt="elements1"
            className="collage__elements1"
          />
          <Image src={pattern1} alt="pattern1" className="collage__pattern1" />

          <Image
            src={pattern450}
            alt="pattern450"
            className="collage__pattern450"
          />
          <p className="collage__text1">
            Наши проекты - это результат тесного взаимодействия с клиентами и
            глубокого понимания их потребностей. В портфолио представлены
            различные проекты, выполненные с учётом специфики бизнеса клиентов и
            последних трендов в веб-разработке и дизайне.
          </p>
        </div>
      </div>
      <div className="collage__box2">
        <button className="collage__btn2">
          <a
            target="_blank"
            href="https://wa.me/+996708161619"
            className="btnText"
          >
            СВЯЗАТЬСЯ С НАМИ
          </a>
        </button>
        <p className="collage__text2">ПОРТФОЛИО</p>
      </div>

      <div className="pd">
        .
        
      </div>
    </div>
  )
}

export default Collage
