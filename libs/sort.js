// sort function (ascending, descending) for string and number value
const sortBy = (
  arr, 
  key, 
  type = 'asc'
) => {
  if (arr) {
    return arr.sort((a, b) => {
      a = a[key]
      b = b[key]
      if (isNaN(a) && isNaN(b)) {
        if (type === 'desc') {
          return b.toUpperCase().localeCompare(a.toUpperCase())
        } else if (type === 'asc') {
          return a.toUpperCase().localeCompare(b.toUpperCase())
        }
      } else {
        if (type === 'desc') {
          return b - a
        } else if (type === 'asc') {
          return a - b
        }
      }
    })
  } else {
    return []
  }
}

// sort function (ascending, descending) for date format value
const sortByDate = (
  arr,
  key,
  type = 'asc'
) => {
  if(arr) {
    return arr.sort((a, b) => {
      a = new Date(a[key]).getTime()
      b = new Date(b[key]).getTime()

      if(type === 'desc'){
        return b - a 
      } else if (type === 'asc'){
        return a - b
      }
    })
  } else {
    return []
  }
}

// I put the sortBook here because this function might be reusable for other pages
const sortBook = (arr, key) => {
  switch (key) {
    case 'name_asc':
      sortBy(arr, 'book_name', 'asc')
      break;
    case 'name_desc':
      sortBy(arr, 'author', 'desc')
      break;
    case 'date_recent':
      sortByDate(arr, 'created_at', 'desc')
      break;
    case 'date_old':
      sortByDate(arr, 'created_at', 'asc')
      break;
    default:
      break;
  }
}

export {
  sortBy,
  sortByDate,
  sortBook
}