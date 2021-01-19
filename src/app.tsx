import React, { FC, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from '@components/pages/HomePage'
// import { ProjectsPage } from '@components/pages/ProjectsPage'
import { GitHubPage } from '@components/pages/GitHubPage'
import 'styles.css'
import '@/public/reset.css'
import '@/public/colors.css'
import '@/public/typography.css'

// const LazyComponent = lazy(() => import('./components/Lazy/Lazy'))
import '@i18n/config'

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route path="/:id" component={ GitHubPage } />
    </Switch>
  )
}

export default App