import { useState } from 'react'

interface InputHookProps {
  query: string
  updateQuery: (newQuery: string) => void
}

export const useInput = (): InputHookProps => {
  const [query, setQuery] = useState('')

  const updateQuery = (newQuery: string): void => {
    if (newQuery.startsWith(' ')) return
    if (newQuery.endsWith(' ')) return
    setQuery(newQuery)
  }

  return { query, updateQuery }
}
