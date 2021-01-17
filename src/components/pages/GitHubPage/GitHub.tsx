import React, { FC, useState, useEffect } from 'react'
import { match } from 'react-router-dom'
// import { RouteComponentProps } from 'react-router'
import axios from 'axios'

import 'styles.css'


type GitHubProps = {
  id: string;
}

type Match = {
  match: match<GitHubProps>;
}


export const GitHubPage: FC<Match> = ({ match }) => {
  console.log(match.params.id)

  type UserState = {
    name?: string;
    location?: string;
    blog?: string;
    followers?:string;
    user: {},
    loading: boolean,
  }

  const initialUserState: UserState = {
    user: {},
    loading: true,
  }


  const [user, setUser] = useState(initialUserState)


  useEffect(() => {
    const getUser = async () => {

      const { data } = await axios(
        `https://api.github.com/users/${match.params.id}`,
      )

      setUser(data)
    }

    getUser()
  }, [match.params.id])


  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>{match.params.id}</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={ user.blog }>{user.blog}</a>
            </td>
            <td>{user.followers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}