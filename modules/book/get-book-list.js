import fetcher from 'libs/fetcher'
import useSWR from 'swr'

const useBook = (
  options = {
    revalidateOnFocus: false
  }
) => {
  const url = '/api/books'
  const bookSWR = useSWR(url, fetcher, options)
  const data = bookSWR.data
  return {
    ...bookSWR,
    data
  }
}

export { useBook }