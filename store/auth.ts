import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'auth',
  stateFactory: true,
  namespaced: true,
})
class Auth extends VuexModule {
  userData: object = {}

  get isAuth(): boolean {
    return Object.entries(this.userData).length ? true : false
  }

  @Mutation
  setUserData(data: object) {
    this.userData = data
  }

  @Mutation
  resetUserData(): void {
    this.userData = {}
  }

  @Action({ commit: 'setUserData' })
  signInHandler(userData: object) {
    localStorage.setItem('user-data', JSON.stringify(userData))
  }

  @Action({ commit: 'resetUserData' })
  logoutHandler() {
    localStorage.removeItem('user-data')
  }
}
export default Auth
