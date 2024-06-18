'use client'
import React, { FC, useState } from 'react'
import { developElem } from './developElem'
import Image from 'next/image'
const Development: FC = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null)
  const elems = developElem.map((item: any) => (
    <li
      className={`development__item ${activeItemId === item.id ? 'active' : ''}`}
      key={item.id}
      onMouseEnter={() => setActiveItemId(item.id)}
      onMouseLeave={() => setActiveItemId(null)}
    >
      <Image src={item.icon} alt={item.title} />

      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </li>
  ))

  return (
    <section className="development">
      <ul className="development__list">{elems}</ul>
    </section>
  )
}

export default Development
