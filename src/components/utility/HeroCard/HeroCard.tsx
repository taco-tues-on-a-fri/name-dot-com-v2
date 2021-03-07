import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './HeroCard.styles.css'
import { HeroCardProps } from './types'

const gitHubHref = 'https://github.com/taco-tues-on-a-fri'

export const HeroCard: FC<HeroCardProps> = ({ header, subheaderLine1, subheaderLine2 }) => {
  return (
    <div className="hero-card__container">
      <h1>{ header }</h1>
      { subheaderLine1 && <p>{ subheaderLine1 }</p>}
      { subheaderLine2 && <p>{ subheaderLine2 }</p>}
      <div className="hero-card__button-container">
        <Link
          to="/about"
          className="hero-card__button"
        >
          About me
        </Link>
        <Link
          to="/snippets"
          className="hero-card__button"
        >
          Snippets
        </Link>
        <a href={ gitHubHref } className="hero-card__button">
          Github
        </a>
      </div>
    </div>
  )
}