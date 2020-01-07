import Cookies from 'js-cookie'

const TokenKey = 'access_token'

export const setToken = token => {
  Cookies.set(TokenKey, token, { expires: 7 })
}
export const getToken = () => (Cookies.get(TokenKey) ? Cookies.get(TokenKey) : '')

export const rmToken = () => Cookies.remove(TokenKey)
