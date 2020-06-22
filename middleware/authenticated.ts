import { Middleware } from '@nuxt/types'

const authenticated: Middleware = ({ redirect, store }) => {
  const userData: any = localStorage.getItem('user-data')

  if (userData !== null) {
    return redirect('/')
  }
}

export default authenticated
