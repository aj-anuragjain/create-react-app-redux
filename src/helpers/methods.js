export const serialize = obj => {
  return (
    '?' +
    Object.keys(obj)
      .reduce(function(a, k) {
        a.push(k + '=' + encodeURIComponent(obj[k]))
        return a
      }, [])
      .join('&')
  )
}

export const stripHTML = html => {
  var tmp = document.createElement('DIV')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

export function generateGuid() {
  let result, i, j
  result = ''
  for (j = 0; j < 32; j++) {
    if (j == 8 || j == 12 || j == 16 || j == 20) result = result + '-'
    i = Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase()
    result = result + i
  }
  return result
}

export const isEmpty = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export function deleteToArray(arr, attr, value) {
  let i = arr.length
  let newArr
  while (i--) {
    if (
      arr[i] &&
      arr[i].hasOwnProperty(attr) &&
      (arguments.length > 2 && arr[i][attr] === value)
    ) {
      newArr = [...arr.slice(0, i), ...arr.slice(i + 1)]

      arr.splice(i, 1)
    }
  }
  return newArr
}

export function pushToArray(arr, obj) {
  const index = arr.findIndex(e => e.hash === obj.hash)

  if (index === -1) {
    arr.unshift(obj)
  } else {
    arr[index] = obj
  }

  return arr
}

export const isUrl = string => {
  try {
    return Boolean(new URL(string))
  } catch (e) {
    return false
  }
}
