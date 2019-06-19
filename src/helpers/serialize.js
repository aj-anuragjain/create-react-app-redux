/* eslint-disable prefer-template */
export default function serialize(obj) {
  return (
    '?' +
    Object.keys(obj)
      .reduce((a, k) => {
        a.push(k + '=' + encodeURIComponent(obj[k]))
        return a
      }, [])
      .join('&')
  )
}
