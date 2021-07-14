import React, { FC, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
// import '@public/prism-night-owl.css'
import '@public/prism-custom.css'

import { useTranslation } from 'react-i18next'
import { HeroCard } from '@components/utility/HeroCard'
import './SnippetsPage.styles.css'

const heroHeader = 'Snippets'
const heroSubheaderLine1 = null
const heroSubheaderLine2 = null


const variableBlock = `const article = { title: 'Taco Monday', content: '500 best monday tacos', } 
const { title, content } = article`

const nullCode = `const heroSubheaderLine2 = null`


const reactCode = `const App = props => {
  return (
    <div>
      <h1> React App </h1>
      <div> Code snippets</div>
    </div>
  );
};
`
const reactCode2 = `export const CodeHighlighter: FC<CodeHighlightProps> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className="Code">
      <pre className="important-overflow-hidden w-full text-sm max-h-60 rounded-lg shadow-lg">
        <code className={\`language-\${language}\`}>{code}</code>
      </pre>
    </div>
  )
}`

const importCode = `import { HeroCard } from '@components/utility/HeroCard'`

type CodeHighlightProps = {
  code: string
  language: string
}

export const CodeHighlight01: FC<CodeHighlightProps> = ({ code, language }) => {
  useEffect(() => {
    // Prism.highlightAll()
  }, [])
  return (
    <div className="Code">
      <pre className="important-overflow-hidden w-full text-sm max-h-60 rounded-lg shadow-lg">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

export const CodeHighlight: FC<CodeHighlightProps> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll()
    // hljs.highlightAll()
  }, [])
  return (
    <div className="mt-8 mx-2">
      <section className="px-4">
        {/* <pre className="important-overflow-hidden w-full text-sm max-h-60 rounded-lg shadow-lg"> */}
        <pre className="important-overflow-hidden w-full text-sm rounded-lg shadow-lg">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </section>
    </div>
  )
}

export const SnippetsPage: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="">
      {/* <section className="home-page__hero-section"> */}
      <HeroCard header={heroHeader} subheaderLine1={heroSubheaderLine1} subheaderLine2={heroSubheaderLine2} />
      <CodeHighlight code={nullCode} language="js" />
      <CodeHighlight code={reactCode2} language="tsx" />
      <CodeHighlight code={variableBlock} language="javascript" />
      <CodeHighlight code={reactCode} language="jsx" />
      <CodeHighlight code={importCode} language="ts" />
    </section>
  )
}
