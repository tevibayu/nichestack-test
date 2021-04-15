// function for summing object value
const deepSumArray = (data, key) => {
  const arr = data?.map(i => i[key])
  return arr?.reduce((a, b) => a + b)
}

export { 
  deepSumArray
}