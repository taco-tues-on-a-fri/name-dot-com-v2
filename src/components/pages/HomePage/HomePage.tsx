import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HeroCard } from '@components/utility/HeroCard'
import { GITHUB_PROFILE_URL } from '@lib/constants'
// import './HomePage.styles.css'
import stringJson from '@i18n/locales/en/home.json'

const buttonConfigArrayOfObjects = [
  {
    id: 'hero-button__about',
    path: '/about',
    label: 'About Me',
    href: undefined,
  },
  {
    id: 'hero-button__snippets',
    path: '/snippets',
    label: 'Snippets',
    href: undefined,
  },
  {
    id: 'hero-button__github',
    path: '',
    label: 'GitHub',
    href: GITHUB_PROFILE_URL,
  },
]

export const HomePage: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="page__hero-section">
      <HeroCard
        header={stringJson.heroHeader}
        subheaderLine1={stringJson.heroSubheaderLine1}
        subheaderLine2={stringJson.heroSubheaderLine2}
        buttonConfigArrayOfObjects={buttonConfigArrayOfObjects}
      />
    </section>
  )
}
