import React, { FC, useEffect, useState } from 'react'
import './styles.css'

export type LoadingProps = {
  text?: string;
  speed?: number;
}

export const Loading: FC<LoadingProps> = ({ text = 'Loading', speed = 300 }) => {
  const [content, setContent] = useState(text)

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent(content => {
        return content === `${text}...` ? text : `${content}.`
      })
    }, speed)

    return () => window.clearInterval(id)
  }, [text, speed])

  return (
    <p className="loading__text">
      {content}
    </p>
  )
}