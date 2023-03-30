

<template>
  <div class="main-app-div" @click="toogle">
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

<style lang="scss">
@import url("./assets/fonts/fonts.scss");

#app {
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


.text-primary {
  color: #1f2f42 !important;
}

.btn-primary {
  background-color: #ffd466 !important;
  color: #1f2f42 !important;
  border: none !important;
}
</style>