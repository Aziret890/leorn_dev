import type { FC } from 'react'
import MarqueeList from '@/components/ui/Marquee/Marquee'
import { fetchData } from '@/api/fetchData'
import './Stack.scss'
const Stack: FC = async () => {
  const stack: [] = await fetchData('stack/')
  const stackElem = stack.map((item: any) => (
    <a key={item.id} className="partners__item" href="#">
      <img width={237} height={61} src={item.logo} alt={item.title} />
      {/* NEXT EXPORT <Image width={237} height={61} src={item.logo} alt={item.title} /> */}
    </a>
  ))

  return (
    <section className="stack">
      <h2 className="stack__title">МЫ ИСПОЛЬЗУЕМ</h2>

      <div className="stack__list">
        <MarqueeList direction="right" stackElem={stackElem} />
        <MarqueeList direction="left" stackElem={stackElem} />
      </div>
    </section>
  )
}

export default Stack
