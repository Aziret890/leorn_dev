import Image from 'next/image'
import type { FC } from 'react'
import logo from '../../../assets/icons/logo.svg'
import telegram from '../../../assets/icons/telegram.svg'
import instagram from '../../../assets/icons/instagram.svg'
import whatsapp from '../../../assets/icons/bi_whatsapp.svg'

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Image src={logo} alt="logo" />

          <p className="footer__text">
            Мы рады предложить индивидуальный подход к каждому проекту,
            гарантируя внимание к деталям и стремление к совершенству во всём,
            что мы делаем.
          </p>

          <div className="footer__inner">
            <p>Свяжитесь с нами</p>

            <div className="footer__socials">
              <a target="_blank" href="https://t.me/+996708161619">
                <Image src={telegram} alt="telegram" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/liordev.kg?igsh=MWJjcmZ2b2llcjliaw=="
              >
                <Image src={instagram} alt="instagram" />
              </a>
              <a target="_blank" href="https://wa.me/+996708161619">
                <Image src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom"></div>

        <p className="footer__rights">Все права зашищены 2024 г.</p>
      </div>
    </footer>
  )
}

export default Footer
