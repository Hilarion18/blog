<template>
  <div id="nav">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/">Nice-Blog</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" data-toggle="modal" data-target="#modalLoginForm" v-if="isLogin === false" >Login</a>
          <a class="dropdown-item" v-if="isLogin === true" @click="signOut">Logout</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item active">
        <router-link to="/articles" >Articles</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      
  </div>
</nav>
  
    </div>
</template>

<script>
export default {
  props: ['isLogin', 'checkLogin'],
  data() {
    return {
    }
  },
  methods: {
    signOut() {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.checkLogin()
    }
  },
  components: {

  }
}
</script>
