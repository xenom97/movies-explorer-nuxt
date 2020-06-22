import { defineComponent, ref } from 'nuxt-composition-api'
import { authStore } from '~/store'

export default defineComponent({
  middleware: 'authenticated',
  setup() {
    const username = ref('')
    const password = ref('')
    const showPassword = ref(false)
    const error = ref({
      username: '',
      password: '',
    })

    function showPasswordHandler(): void {
      showPassword.value = !showPassword.value
    }

    function submitHandler(): void {
      if (password.value.length && username.value.length) {
        authStore.signInHandler({
          username: username.value,
          password: password.value,
        })
      }
      this.$router.push('/')
    }

    return {
      username,
      password,
      showPassword,
      error,
      showPasswordHandler,
      submitHandler,
    }
  },
})
