import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthService.register({
//   email: 'testing@example.com',
//   password: '123456'
// })
