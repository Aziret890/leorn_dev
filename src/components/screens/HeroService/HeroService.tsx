import Image from 'next/image'
import type { FC } from 'react'
import bg from '@/assets/images/bg_sevice_main.png'

const HeroService: FC = () => {
  return (
    <section className="hero">
      <Image src={bg} alt="bg" />

      <div className="container">
        <h2 className="hero__title">
          ЧТО МЫ <span>МОЖЕМ ПРЕДЛОЖИТЬ</span>?
        </h2>
      </div>
    </section>
  )
}

export default HeroService
