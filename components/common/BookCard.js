import { parseDate, parseNumber } from 'libs/parser'
import BookContext from 'libs/hooks/book'
import Tag from 'components/common/Tag'
import PropTypes from 'prop-types'

function BookCard({ book }) {
  const { setData } = BookContext.useContainer()
  let borderColor = 'var(--green)'

  
  return (
    
      <div className='book-card f f-btw mdl'>
        <style jsx>
          {`
          .book-card {
            background: #fff;
            padding: 12px 15px;
            border-radius: 4px;
            margin-bottom: 10px;
            border-left: solid 5px ${borderColor};
            cursor: pointer;
          }
          .dot {
            width: 6px;
            height: 6px;
            margin: 0 5px;
            border-radius: 10px;
            background: var(--text-color);
            display: inline-block
          }
        `}
        </style>
        <div>
          <p className='bold uppercase'>
            {book.book_name}
          </p>
          <br/>
          Authors: <p className='uppercase'>{book.author}</p>
         
        </div>
        <Tag type={parseDate(book.created_at)} />
      </div>
 
  )
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookCard