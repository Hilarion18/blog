<template>
  <div id="app">
    <div>
      <navBar :isLogin="isLogin" :checkLogin="checkLogin" />
    </div>
    <router-view/>
    <modal-login :checkLogin="checkLogin"/>
  </div>
</template>

<script>
import ModalLogin from '@/components/ModalLogin.vue'
import navBar from '@/components/Navbar.vue';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

export default {
  data() {
    return {
      isLogin: false,
    }
  },
  components: {
    navBar,
    ModalLogin    
  },
  methods: {
    checkLogin() {
      let token = localStorage.getItem('token')
      if (token) {
        this.isLogin = true
      } else { 
        this.isLogin = false
      }
    }
  },
  created: function() {
    this.checkLogin()
  },
  mounted: function() {

  },
  watch: {

  },
  computed: {

  },
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
