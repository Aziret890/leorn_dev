import type { FC } from 'react'
import Image from 'next/image'

import dots from '@/assets/images/dots.svg'

const Breaf: FC = () => {
  return (
    <section className="breaf">
      <div className="container">
        <Image className="breaf__dots-left" src={dots} alt="dots" />

        <div className="breaf__wrapper">
          <h2 className="breaf__title">Давайте сделаем что-нибудь вместе :)</h2>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3xe8VqNsz-aVW8k7e0JY1rUDJh--WSFQBb9oDB7g6dBiy-w/viewform?usp=sf_link"
            className="form__btn-orange breaf__btn"
          >
            ЗАПОЛНИТЬ БРИФ
          </a>
        </div>

        <Image className="breaf__dots-right" src={dots} alt="dots" />
      </div>
    </section>
  )
}

export default Breaf
