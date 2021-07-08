import React, { FC } from 'react'
import './ProjectCards.styles.css'

export type ProjectCardsProps = {
  configJson: ProjectConfig
}
export type ProjectObject = {
  id: string
  hrefDemo: string
  hrefRepo: string
  heading: string
  body: string
  imageUrl: string
  imageAlt: string
}
export type ProjectConfig = {
  projects: ProjectObject[]
}

export type CardProps = {
  configObject: ProjectObject
}

const Card: FC<CardProps> = ({ configObject }) => {
  const { hrefDemo, hrefRepo, heading, body, imageAlt, imageUrl } = configObject
  return (
    <div className="project-card">
      <div className="flex-shrink-0">
        <a target="_blank" rel="noopener noreferrer" href={hrefDemo}>
          <img className="project-card--image" src={imageUrl} alt={imageAlt} />
        </a>
      </div>
      <div className="project-card--content">
        <div className="flex-1">
          <p className="project-card--content--heading">{heading}</p>
          <p className="project-card--content--body">{body}</p>
          <div className="flex space-x-2">
            <p className="project-card--content--link">
              <a target="_blank" rel="noopener noreferrer" href={hrefDemo}>
                Demo
              </a>
            </p>
            <p className="project-card--content--link">
              <a target="_blank" rel="noopener noreferrer" href={hrefRepo}>
                Repo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ProjectCards: FC<ProjectCardsProps> = ({ configJson }) => {
  const { projects } = configJson

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {projects.map(projectObject => {
          return <Card key={projectObject.id} configObject={projectObject} />
        })}
      </div>
    </div>
  )
}
