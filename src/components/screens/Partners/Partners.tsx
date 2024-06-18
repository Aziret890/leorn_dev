import MarqueeList from '@/components/ui/Marquee/Marquee'
import React, { FC } from 'react'
// import Image from 'next/image'
import { fetchData } from '@/api/fetchData'

const Partners: FC = async () => {
  const data = await fetchData('partner')

  const stackElem = data.map((item: any) => (
    <a key={item.id} className="partners__item" href="#">
      <img width={237} height={61} src={item.logo} alt={item.title} />
      {/* NEXT EXPORT <Image width={237} height={61} src={item.logo} alt={item.title} /> */}
    </a>
  ))
  return (
    <section id="partners" className="partners">
      <h2 className="partners__title">НАШИ ПАРТНЕРЫ</h2>
      <MarqueeList direction='right' stackElem={stackElem} />
    </section>
  )
}

export default Partners
