import React, { FC, Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '@src/contexts/theme/theme'
import { GITHUB_PROFILE_URL } from '@lib/constants'
// import './NavBar.styles.css'
import { NavBarProps, CreateNavItemProps } from './types'


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

const activeStyle = {
  color: '#46C6EB',
  fontWeight: 700,
}

const CreateNavItem: FC<CreateNavItemProps> = ({ configArrayOfObjects }) => {
  return (
    <Fragment>
      {configArrayOfObjects.map(configItem => {
        const { id, path, label, href } = configItem || {}

        return (
          <li key={id}>
            {!href && (
              <NavLink to={path} exact activeStyle={activeStyle} className="nav-bar__link-item">
                {label}
              </NavLink>
            )}
            {href && (
              <a href={href} className="nav-bar__link-item">
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
    <nav className="nav-bar__container">
      <div className="nav-bar__logo-container">
        <span>Michael Jadick</span>
      </div>
      <div className="nav-bar__link-container">
        <ul>
          <CreateNavItem configArrayOfObjects={navConfigArrayOfObjects} />
        </ul>
      </div>
    </nav>
  )
}

// <button
// style={{ fontSize: 30 }}
// className="btn-clear"
// onClick={ toggleTheme }
// type="button"
// >
// {themeContext.theme === 'light' ? '🔦' : '💡'}
// </button>
