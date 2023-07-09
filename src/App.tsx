import './App.css'

import { UserCard } from './components/UserCard'
import { useUser } from './hooks/useUser'

import classes from './components/Input.module.css'
import { useInput } from './hooks/useInput'
import { useCallback } from 'react'
import debounce from 'just-debounce-it'

function App (): JSX.Element {
  const { user, fetchUser } = useUser()
  const { query, updateQuery } = useInput()

  const debouncedGetCharacters = useCallback(
    debounce((search: string) => {
      void fetchUser(search)
    }, 300), [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newQuery = event.target.value
    updateQuery(newQuery)

    debouncedGetCharacters(newQuery)
  }

  return (
    <main>
      <h1>GitHub · Search User</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className={classes.userInput}
        placeholder="Scott Chacon"
        autoFocus
      />
      <UserCard user={user} />
    </main>
  )
}

export default App
