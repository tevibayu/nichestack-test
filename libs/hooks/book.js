import { createContainer } from 'unstated-next'
import { useState } from 'react'

// Im using unstated next for state management instead of Redux because the apps
// is not big and unstated next is more scooped
const BookContext = createContainer(() => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState({})
  return {

    data, // state to save selected data and show them in detail transaction page
    setData,

    search, // state to save search input value used in filter
    setSearch,
    
    sort, // state to save sort object that used in sort
    setSort
  }
})

export default BookContext