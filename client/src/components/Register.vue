<template>
  <div class="Register">
    <h1>Register</h1>
    <input type="email" name="email" placeholder="Email" v-model="email"/>
    <input type="password" name="password" placeholder="Password" v-model="password" />
    <br>
    <button v-on:click="register">Register</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}

</script>

<style scoped>

</style>
