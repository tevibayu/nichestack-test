// function to parse number to rupiah IDR
const parseNumber = value => {
  if (isNaN(value)) return 'Not number'
  return new Intl.NumberFormat(
    ['ban', 'id']
  ).format(value)
}

// function to parse date to dd-MMMM-YYYY format
const parseDate = value => {
  return new Intl.DateTimeFormat(
    'id-GB',
    {
      dateStyle: 'long'
    }
  ).format(new Date(value))
}

export {
  parseNumber,
  parseDate
}
