<template>
    <div class="d-inline-flex">
      <side-bar></side-bar>
      <div class="container-fluid col-md-11">
        <div class="row">
          <div class="col-12">
            <!-- <h1>Dashboard</h1> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from './SideBar.vue'
  
  export default {
    components: {
      'side-bar': SideBar,
    },
  };
  </script>
  
  <style scoped>
  .container-fluid {
    padding: 0;
    background-color: #ecf2f9;
  }
  </style>
  