import BookCard from 'components/common/BookCard'
import BookContext from 'libs/hooks/book'
import BookFilter from 'components/book/BookFilter'
import Response from 'components/common/Response'
import { useEffect } from 'react'
import { filterMultiple } from 'libs/filter'
import { sortBook } from 'libs/sort'
import { deepSumArray } from 'libs/sum'
import { useBook } from 'modules/book/get-book-list'

export default function BookListWrapper() {
  const {
    setTotalAmount,
    sort,
    search
  } = BookContext.useContainer()
  const { data, error } = useBook()

  const filteredData = filterMultiple(
    data,
    [
      'book_name',
      'author'
    ],
    search
  )

  sortBook(filteredData, sort.key)


  return (
    <>
      <BookFilter />
      <div>
        {
          !data && !error &&
          <Response title='Loading...' />
        }
        {
          data && filteredData.length == 0 &&
          <Response title='No data found' />
        }
        {
          filteredData?.map(i =>
            <BookCard key={i.id} book={i} />
          )
        }
      </div>
    </>
  )
}