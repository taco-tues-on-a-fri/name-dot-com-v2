import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HeroCard } from '@components/utility/HeroCard'
import './AboutPage.styles.css'
import stringJson from '@i18n/locales/en/about.json'

export const AboutPage: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="page__hero-section">
      <HeroCard
        header={stringJson.heroHeader}
        subheaderLine1={stringJson.heroSubheaderLine1}
        subheaderLine2={stringJson.heroSubheaderLine2}
      />
    </section>
  )
}
