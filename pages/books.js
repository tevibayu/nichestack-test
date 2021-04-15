import { useEffect } from 'react'
import BookListWrapper from 'components/book/BookListWrapper'
import BookContext from 'libs/hooks/book'
import Menu from 'components/common/layout/Menu'

export default function Books() {
  
  useEffect(() => {
    document.title = 'Book List'
  })

  return (
    <div className='container'>
      <Menu />
      <h1 className='centered'>Book List</h1>
      <div style={{ padding: '0 15px' }}>
        <h2 className='bold'>Hi dev!</h2>
        <p className='subtitle'>
          NicheStack Frontend Test 
        </p>
      </div>
      <BookListWrapper />
    </div>
  )
}