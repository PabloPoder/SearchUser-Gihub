import { useState } from 'react'
import { getUser } from '../services/getUser'
import { type User } from '../types'
import { initialUser } from '../const'

interface UserHookProps {
  user: User
  fetchUser: (username: string) => Promise<void>
}

export const useUser = (): UserHookProps => {
  const [user, setUser] = useState<User>(initialUser)

  const fetchUser = async (username: string): Promise<void> => {
    try {
      const userData = await getUser(username)
      setUser(userData)
    } catch (error) {
      console.error(error)
    }
  }

  return { user, fetchUser }
}
