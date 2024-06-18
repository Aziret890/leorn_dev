'use client'
import React, { FC, useState, useEffect } from 'react'
import { fetchData } from '@/api/fetchData'

const Portfolio = ({ className }: any) => {
  const [projects, setProjects] = useState<any[]>([])
  const [visibleProjects, setVisibleProjects] = useState<number>(6)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchProjects()
  }, [visibleProjects])

  const fetchProjects = async () => {
    setLoading(true)
    try {
      const data = await fetchData('portfolio/')
      setProjects(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    setLoading(false)
  }

  const loadMoreProjects = () => {
    if (!loading) {
      setLoading(true)
      setVisibleProjects((prev) => prev + 6)
    }
  }

  const renderedProjects = projects
    .slice(0, visibleProjects)
    .map((item: any, index: any) => (
      <a
        className={
          !className ? `portfolio__image-${index} ` : `${className}${index}`
        }
        href={item.title}
        key={item.id}
        target="_blank"
      >
        <img
          className={!className ? 'portfolio__img' : ''}
          width={100}
          height={240}
          src={item.images}
          alt={item.description}
        />
      </a>
    ))

  return (
    <section className="portfolio">
      <div className="container">
        {!className && (
          <h2 className="portfolio__title">ПОРТФОЛИО СТУДИИ LIOR DEV</h2>
        )}

        <div className="portfolio__list">{renderedProjects}</div>

        {!className && (
          <button className="portfolio__btn" onClick={loadMoreProjects}>
            {'СМОТРЕТЬ ЕЩЕ'}
          </button>
        )}
      </div>
    </section>
  )
}

export default Portfolio
