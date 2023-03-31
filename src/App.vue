
<template>
  <LoginForm v-if="token===null" />
  <div v-else class="main-app-div" @click="toogle">
  <SideBar />
    <router-view class="pages" />
  </div>

</template>

<script>
import LoginForm from "@/components/LoginForm.vue";


import SideBar from './components/SideBar.vue'
export default {
  components: { SideBar, LoginForm },
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    this.token = localStorage.getItem('authToken');
    if (localStorage.name) {
      this.token = localStorage.authToken;
      console.log(this.token)
    }
  },
  methods: {

  },
  computed:{
    getAuthToken() {
      return localStorage.getItem('authToken')
    },
  },
  watch: {
    getAuthToken() {
      return localStorage.getItem('authToken')
    },
    name(newName) {
      localStorage.authToken = newName;
      console.log(this.token)
    }
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100% !important;
  height: 100% !important;
}

body, html {
  height: 100%;
}

.main-app-div {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
}

.text-primary {
  color: #1f2f42 !important;
}

.pages{
  margin-left: 6.5rem;


}
.btn-primary {
  background-color: #ffd466 !important;
  color: #1f2f42 !important;
  border: none !important;
}
</style>