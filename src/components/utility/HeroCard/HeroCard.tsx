import React, { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './HeroCard.styles.css'
import { HeroCardProps, CreateButtonsProps } from './types'

const CreateButtons: FC<CreateButtonsProps> = ({ configArrayOfObjects }) => {
  return (
    <Fragment>
      {configArrayOfObjects.map(configItem => {
        const { id, path, label, href } = configItem || {}

        return (
          <Fragment>
            {!href && (
              <Link key={id} to={path} className="hero-card__button">
                {label}
              </Link>
            )}
            {href && (
              <a key={id} href={href} className="hero-card__button">
                {label}
              </a>
            )}
          </Fragment>
        )
      })}
    </Fragment>
  )
}

export const HeroCard: FC<HeroCardProps> = ({
  header,
  subheaderLine1,
  subheaderLine2,
  buttonConfigArrayOfObjects = null,
}) => {
  return (
    <div className="hero-card__container">
      <h1>{header}</h1>
      {subheaderLine1 && <p>{subheaderLine1}</p>}
      {subheaderLine2 && <p>{subheaderLine2}</p>}
      {buttonConfigArrayOfObjects && (
        <div className="hero-card__button-container">
          <CreateButtons configArrayOfObjects={buttonConfigArrayOfObjects} />
        </div>
      )}
    </div>
  )
}
