

<template>
  <div class="main-app-div" @click="toogle">
    <p class="ariane-filler"> <span class="ariane-greef"></span>{{currentRouteName}} </p>
    <LeftNavigation :drop-down-app-props="closeDropdown" :drop-down-avatar-props="closeDropdown"   />
    <router-view class="pages" />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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