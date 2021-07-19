import React, { FC, useEffect } from 'react'
import Prism from 'prismjs'
import '@public/prism-custom.css'

type CodeHighlighterProps = {
  code: string
  language: string
}

export const CodeHighlighter: FC<CodeHighlighterProps> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className="mt-8 mx-2">
      <section className="px-4">
        <pre className="important-overflow-hidden w-full text-sm rounded-lg shadow-lg">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </section>
    </div>
  )
}
