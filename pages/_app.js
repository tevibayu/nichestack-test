import BookContext from 'libs/hooks/book'
import 'styles/variables.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <BookContext.Provider>
      <Component {...pageProps} />
    </BookContext.Provider>
  )
}

export default MyApp
