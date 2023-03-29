<template>
  <SideBar />
  <FormationForm />
  <button @click="showModal = true">Open Modal</button>
    <ModalPopup v-if="showModal" @close="showModal = false" />
</template>


<script>
import SideBar from "@/components/menus/SideBar.vue";
import FormationForm from "@/components/forms/FormationForm.vue";
export default {  
  name: 'HelloWorld',
  data(){
    return {
      test: "12234445",
      tab: [1,2,3,4]
    }
  },
  components: {SideBar, FormationForm},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
