module.exports = obj => Object.keys(obj).reduce((index, key) => {
  if (obj[key] != null) {
    index[key] = obj[key]
  }
  return index
}, {})
