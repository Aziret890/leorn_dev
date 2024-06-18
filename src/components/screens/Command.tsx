import React, { FC } from 'react'
import Image from 'next/image'
import { fetchData } from '../../api/fetchData'

const Command: FC = async () => {
  const team = await fetchData('team/')

  return (
    <section className="container command">
      <div className="command__text">
        <h3 className="command__title">Команда студии</h3>
        <p className="command__subtitle">
          Наши проекты воплощаются в жизнь благодаря усилиям команды талантливых
          специалистов, в которую входят разработчики, дизайнеры, аналитики и
          менеджеры проектов. Батыр Осмонкулов, основатель и стратегический
          руководитель LiorDev, вместе с командой обеспечивает высокий уровень
          исполнения каждого проекта.
        </p>
      </div>

      <div className="command__box">
        <ul className="command__list">
          {team.map((teamItem: any) => (
            <li className="command__item" key={teamItem.id}>
              <div className="command__wrapper">
                {/* <Image
                  src={teamItem.photo}
                  alt={teamItem.full_name}
                  width={366}
                  height={392}
                  className="command__img"
                /> */}
                <img
                  src={teamItem.photo}
                  alt={teamItem.full_name}
                  width={366}
                  height={392}
                  className="command__img"
                />
                <p
                  className={`command__job ${
                    teamItem.id === 1 ? 'command__boss' : ''
                  }`}
                >
                  {teamItem.position}
                </p>
              </div>
              <h4 className="job__title">{teamItem.full_name}</h4>
              <p className="job__text">{teamItem.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Command
