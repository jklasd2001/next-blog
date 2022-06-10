import qs from 'qs'

export function getStrapiURL(path = '') {
  return `http://localhost:1337${path}`
}
