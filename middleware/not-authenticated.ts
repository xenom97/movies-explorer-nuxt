import { Middleware } from '@nuxt/types'

const notAuthenticated: Middleware = ({ redirect, store }) => {
  const userData: any = localStorage.getItem('user-data')

  if (userData === null) {
    return redirect('/login')
  } else {
    store.commit('auth/setUserData', userData)
  }
}

export default notAuthenticated
