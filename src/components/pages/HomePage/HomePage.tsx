import React, { FC, lazy } from 'react'
import { Link } from 'react-router-dom'

import 'styles.css'

// const LazyComponent = lazy(() => import('@components/Lazy/Lazy'))
const onGitHub = ' on Github'
export const HomePage: FC = () => {
  return (
    <div>
      <React.Suspense fallback={ <h1>Loading</h1> }>
        <h1>Home Page</h1>
        <p>
          <Link to="/taco-tues-on-a-fri">taco-tues-on-a-fri</Link>
          { onGitHub }
        </p>
      </React.Suspense>
    </div>
  )
}