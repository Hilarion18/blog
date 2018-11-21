<template>
  <div>
  <!-- <navBar/> -->
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import navBar from '@/components/Navbar.vue';

export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  components: {
    HelloWorld,
    // navBar
  },
};
</script>
