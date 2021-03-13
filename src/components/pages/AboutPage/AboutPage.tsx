import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HeroCard } from '@components/utility/HeroCard'
import './AboutPage.styles.css'


const heroHeader = 'About'
const heroSubheaderLine1 = null
const heroSubheaderLine2 = null



export const AboutPage: FC = () => {
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