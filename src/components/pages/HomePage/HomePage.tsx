import React, { FC, lazy } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import 'styles.css'
// const LazyComponent = lazy(() => import('@components/Lazy/Lazy'))
const onGitHub = ' on Github'
export const HomePage: FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <React.Suspense fallback={ <h1>Loading</h1> }>
        <h1>Home Page</h1>
        <h2>{t('hello')}</h2>
        <p>
          <Link to="/taco-tues-on-a-fri">taco-tues-on-a-fri</Link>
          { onGitHub }
        </p>
      </React.Suspense>
    </div>
  )
}