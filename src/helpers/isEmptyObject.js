/* eslint-disable no-restricted-syntax */
const isEmpty = obj => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false
  }
  return true
}

export default isEmpty
