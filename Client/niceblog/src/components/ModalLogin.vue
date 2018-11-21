<template>

  <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="modalLoginForm"
  aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body mx-3">
          <div class="md-form mb-5">
            <i class="fa fa-envelope prefix grey-text"></i>
            <input type="email" v-model="email">
            <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
          </div>

          <div class="md-form mb-4">
            <i class="fa fa-lock prefix grey-text"></i>
            <input type="password" v-model="password">
            <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
          </div>

        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button @click="login" data-dismiss="modal">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config.js'
export default {
  // name: "modal_login",
  props: ['checkLogin'],
  data () {
    return {
      name: '',
      names: [],
      tes: '',
      email: '',
      password: '',
      
    }
  },
  methods: { 
    login() {
      axios({
        method: 'POST',
        url: `${config.port}/user/signin`,
        data: {
          email: this.email,
          password: this.password
        },
        headers: {

        }
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', response.data.name)
        this.checkLogin()
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
}
</script>