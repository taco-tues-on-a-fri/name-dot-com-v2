import React, { FC, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeContext } from '@src/contexts/theme/theme'

import { lazyImport } from '@utilities/lazyImport'
import { Loading } from '@components/utility/Loading'
import { NavBar } from '@components/utility/NavBar/NavBar'

// import 'styles.css'
// import '@/public/reset.css'
// import '@/public/colors.css'
// import '@/public/typography.css'

import 'tailwindcss/tailwind.css'
import '@i18n/config'

const { AboutPage } = lazyImport(() => import('@components/pages/AboutPage'), 'AboutPage')
const { ContactPage } = lazyImport(() => import('@components/pages/ContactPage'), 'ContactPage')
const { HomePage } = lazyImport(() => import('@components/pages/HomePage'), 'HomePage')
const { ProjectsPage } = lazyImport(() => import('@components/pages/ProjectsPage'), 'ProjectsPage')
const { SnippetsPage } = lazyImport(() => import('@components/pages/SnippetsPage'), 'SnippetsPage')

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
        <NavBar toggleTheme={toggleTheme} />
        <div className="page-container">
          {/* <img
            alt="wave background"
            className="waves-background"
            src="https://sticky-haircut.s3.us-east-2.amazonaws.com/static/bk/cerulean-wave.svg"
          /> */}
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/snippets" component={SnippetsPage} />
            </Switch>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
