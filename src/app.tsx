import React, { FC, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeContext } from '@src/contexts/theme/theme'

import { lazyImport } from '@utilities/lazyImport'
import { Loading } from '@components/utility/Loading'
import { NavBar } from '@components/utility/NavBar/NavBar'

import 'styles.css'
import '@/public/reset.css'
import '@/public/colors.css'
import '@/public/typography.css'

import '@i18n/config'

const { GitHubPage } = lazyImport(() => import('@components/pages/GitHubPage'), 'GitHubPage')
const { HomePage } = lazyImport(() => import('@components/pages/HomePage'), 'HomePage')

const App: FC = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else setTheme('light')
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <NavBar toggleTheme={ toggleTheme } />
          <div className="page-container">
            <Suspense fallback={ <Loading /> }>
              <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/:id" component={ GitHubPage } />
              </Switch>
            </Suspense>
          </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App