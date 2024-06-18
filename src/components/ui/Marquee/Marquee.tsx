import type { FC } from 'react'
import Marquee from 'react-fast-marquee'

interface Props {
  stackElem: any
  direction: 'left' | 'right' | 'up' | 'down'
}

const MarqueeList: FC<Props> = ({ stackElem, direction }) => {
  console.log(direction)

  return (
    <>
      <Marquee direction={direction} className="stack__elems">
        <div className="stack__item">{stackElem}</div>
      </Marquee>
    </>
  )
}

export default MarqueeList
