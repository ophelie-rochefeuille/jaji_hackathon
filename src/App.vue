<template>
  <login></login>
</template>

<script>
import Login from './components/LoginForm.vue';
import 'bootstrap/dist/css/bootstrap.css'

export default {
  components: {
    Login
  }
};
</script>

<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.text-primary {
  color: #1f2f42 !important; 
}

.btn-primary {
  background-color: #ffd466 !important;
  color: #1f2f42 !important;
  border: none !important;
}
</style>

