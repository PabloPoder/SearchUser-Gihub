import { type User } from '../types'
import { initialUser } from '../const'

const API_URL = 'https://api.github.com/users/'

export const getUser = async (query: string): Promise<User> => {
  const url = API_URL + query
  const response = await fetch(url)

  if (!response.ok) return initialUser

  const data = await response.json()
  console.log(data)

  return data
}
