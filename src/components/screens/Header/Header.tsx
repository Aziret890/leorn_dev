'use client'
import React, { FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { elems } from './elems'
import Link from 'next/link'
import logo from '../../../assets/icons/logo.svg'
import location from '../../../assets/icons/location.svg'
import call from '../../../assets/icons/call.svg'
import Image from 'next/image'
import ru from '@/assets/icons/russia_flag.svg'

const Header: FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false) // Close menu when pathname changes
  }, [pathname])

  if (!isMounted || !pathname) return null

  let isActive
  const navElems = elems.map(({ title, to }) => {
    isActive = pathname === to

    return (
      <li className={`header__item ${isActive ? 'active' : ''}`} key={title}>
        <Link className="header__link" href={to}>
          {isActive && <div className="header__active-dot"></div>}
          {title}
        </Link>
      </li>
    )
  })

  const scrollToComponent = (id: string) => {
    const component = document.getElementById(id)
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isHomePage = pathname === '/'

  return (
    <header>
      <div className="container header">
        <div className="header__top">
          <a href="https://go.2gis.com/sbodo">
            <Image width={'10'} height={'15'} src={location} alt="location" />
            Ибраимова 115/1 (Бизнес центр Асыл-Таш)
          </a>
          <a href="tel:+996708161619">
            <Image width={'10'} height={'15'} src={call} alt="location" />
            +996 708-16-16-19
          </a>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container header__inner">
          <Link href={'/'}>
            <Image src={logo} alt="logo" />
          </Link>

          <button
            className={
              !isMenuOpen ? 'header__burger-btn' : 'header__burger-btn-x'
            }
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`header__menu ${!isMenuOpen ? 'open' : ''}`}>
            <ul className="header__list">
              {navElems}
              {isHomePage && (
                <li className={`header__item ${isActive ? 'active' : ''}`}>
                  <button
                    onClick={() => scrollToComponent('partners')}
                    className="header__link"
                  >
                    {isActive && <div className="header__active-dot"></div>}
                    ПАРТНЕРЫ
                  </button>
                </li>
              )}
            </ul>

            <div className="header__lang">
              <button className="header__lang-btn">
                <Image src={ru} alt="ru" />
              </button>
            </div>

            <button
              onClick={() => scrollToComponent('targetComponent')}
              className="header__btn"
            >
              ОНЛАЙН-ЗАПРОС
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
