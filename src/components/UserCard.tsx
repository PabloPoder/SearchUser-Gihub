import classes from './UserCard.module.css'

import { Item } from './Item'
import { ICONS } from '../const'
import { type User } from '../types'

interface Props {
  user: User
}

export const UserCard: React.FC<Props> = ({ user }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)

  const color = { backgroundColor: `#${randomColor}` }

  return (
    <div className={classes.wrapper}>
      <div className={classes.userInfo}>
        <div className={classes.text}>
          <h2><a href={ user.html_url} target='_blank' rel="noreferrer">{ user.name }</a></h2>
          <h3>{ user.login }</h3>
          <p>{ user.bio }</p>
        </div>
        <img
          className={classes.avatar}
          src={ user.avatar_url }
        />
      </div>
      <div className={classes.data}>
        <Item
          icon={ICONS.REPOS}
          value={user.public_repos}
          text="Repos"
        />
        <Item
          icon={ICONS.FOLLOWERS}
          value={user.followers}
          text="Followers"
        />
        <Item
          icon={ICONS.GITS}
          value={user.public_gists}
          text="Gits"
        />
        <Item
          icon={ICONS.LOCATION}
          value={user.location}
          text="Location"
        />
      </div>
      <div className={classes.footer} style={color}/>
    </div>
  )
}
