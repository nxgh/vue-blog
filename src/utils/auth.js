const current_user_role = () =>
  localStorage.getItem('token')
    ? JSON.parse(
        atob(localStorage.getItem('token').split('.')[1])
      ).data.authority.toLowerCase() === 'admin'
      ? ['admin']
      : ['user']
    : ['anon']

export const check = authority => {
  const current = current_user_role()
  return current.some(item => authority.includes(item))
}

export const is_login = () => {
  const current = current_user_role()
  return current && current[0] !== 'anon'
}
