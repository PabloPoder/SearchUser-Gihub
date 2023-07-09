import { GoRepo, GoLocation } from 'react-icons/go'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitBranch } from 'react-icons/bi'

import { type User } from './types'

const ICON_STYLE = { color: '#909090' }

export const ICONS = {
  REPOS: <GoRepo style={ICON_STYLE} />,
  FOLLOWERS: <AiOutlineStar style={ICON_STYLE} />,
  GITS: <BiGitBranch style={ICON_STYLE} />,
  LOCATION: <GoLocation style={ICON_STYLE} />
}

export const initialUser: User = {
  avatar_url: 'https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e',
  bio: 'Bio',
  followers: 0,
  html_url: 'https://github.com/',
  location: 'Location',
  login: 'Unknown',
  name: 'Unknown',
  public_gists: 0,
  public_repos: 0
}
