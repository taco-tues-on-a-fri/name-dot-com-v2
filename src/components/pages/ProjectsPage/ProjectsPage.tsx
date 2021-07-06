import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HeroCard } from '@components/utility/HeroCard'
// import './ProjectsPage.styles.css'
import projectsConfig from './projects-config.json'

import { ProjectCards } from './ProjectCards'

const heroHeader = 'Projects'
const heroSubheaderLine1 = null
const heroSubheaderLine2 = null

export const ProjectsPage: FC = () => {
  const { t } = useTranslation()
  return <ProjectCards configJson={projectsConfig} />
}
