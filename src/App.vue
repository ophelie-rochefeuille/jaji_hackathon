

<template>
  <div class="main-app-div d-inline-flex" @click="toogle">
  <SideBar />
    <router-view class="pages" />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
export default {
  components: { SideBar },
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
}

.main-app-div {
  width: 100% !important;
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