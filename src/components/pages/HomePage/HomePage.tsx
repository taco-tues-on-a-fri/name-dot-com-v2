import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HeroCard } from '@components/utility/HeroCard'
import './HomePage.styles.css'
import 'styles.css'

const onGitHub = ' on Github'

const heroHeader = 'I\'m Michael Jadick'
const heroSubheaderLine1 = 'I\'m a software engineer specializing in React and Typescript.'
const heroSubheaderLine2 = 'This website is a collection of the things I\'ve cultivated and created over the years.'



export const HomePage: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="home-page__hero-section">
      <HeroCard
        header={ heroHeader }
        subheaderLine1={ heroSubheaderLine1 }
        subheaderLine2={ heroSubheaderLine2 }
      />
    </section>
  )
}