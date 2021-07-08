import React, { FC, Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '@src/contexts/theme/theme'
import { GITHUB_PROFILE_URL } from '@lib/constants'
import { NavBarProps, CreateNavItemProps } from './types'
import './NavBar.styles.css'

const navConfigArrayOfObjects = [
  {
    id: 'nav-item__home',
    path: '/',
    label: 'Home',
    href: undefined,
  },
  {
    id: 'nav-item__about',
    path: '/about',
    label: 'About Me',
    href: undefined,
  },
  {
    id: 'nav-item__projects',
    path: '/projects',
    label: 'Projects',
    href: undefined,
  },
  {
    id: 'nav-item__snippets',
    path: '/snippets',
    label: 'Snippets',
    href: undefined,
  },
  {
    id: 'nav-item__github',
    path: '',
    label: 'GitHub',
    href: GITHUB_PROFILE_URL,
  },
  {
    id: 'nav-item__contact',
    path: '/contact',
    label: 'Contact',
    href: undefined,
  },
]

const defaultClassName = 'nav-link nav-link--default'
const activeClassName = 'nav-link--active'

const CreateNavItem: FC<CreateNavItemProps> = ({ configArrayOfObjects }) => {
  return (
    <Fragment>
      {configArrayOfObjects.map(configItem => {
        const { id, path, label, href } = configItem || {}

        return (
          <li key={id}>
            {!href && (
              <NavLink to={path} exact activeClassName={activeClassName} className={defaultClassName}>
                {label}
              </NavLink>
            )}
            {href && (
              <a href={href} className={defaultClassName}>
                {label}
              </a>
            )}
          </li>
        )
      })}
    </Fragment>
  )
}


export const NavBar: FC<NavBarProps> = ({ toggleTheme }) => {
  const themeContext = useContext(ThemeContext)

  return (
    <header>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <p className="nav-brand">Michael Jadick</p>
              </div>
              <div className="sm:block sm:ml-6">
                <ul className="flex space-x-4">
                  <CreateNavItem configArrayOfObjects={navConfigArrayOfObjects} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
