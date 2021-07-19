import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { HeroCard } from '@components/utility/HeroCard'
import { CodeHighlighter } from '@components/utility/CodeHighlighter'
import './SnippetsPage.styles.css'
import { stringSnippets } from './code-snippets/checks/strings'

const heroHeader = 'Snippets'
const heroSubheaderLine1 = null
const heroSubheaderLine2 = null

export const SnippetsPage: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="">
      {/* <section className="home-page__hero-section"> */}
      <HeroCard header={heroHeader} subheaderLine1={heroSubheaderLine1} subheaderLine2={heroSubheaderLine2} />
      {stringSnippets.map(item => {
        const { id, language, snippet } = item
        return <CodeHighlighter key={id} code={snippet} language={language} />
      })}
    </section>
  )
}
