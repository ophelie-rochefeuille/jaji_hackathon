

<template>
  <LoginForm v-if="token === ''" />
  <div v-if="token" class="main-app-div" @click="toogle">
  <SideBar />
    <router-view class="pages" />
  </div>

</template>

<script>
import SideBar from './components/SideBar.vue'
import LoginForm from "@/components/LoginForm.vue";
export default {
  components: { SideBar, LoginForm },
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    if (localStorage.name) {
      this.token = localStorage.authToken;
    }
  },
  watch: {
    name(newName) {
      localStorage.authToken = newName;
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
<<<<<<< HEAD

=======
  /*background-color: #f5f5f5;*/
>>>>>>> e75d821 (correction bugs css)

}
.btn-primary {
  background-color: #ffd466 !important;
  color: #1f2f42 !important;
  border: none !important;
}
</style>