<template>
  <div class="main-div-profesional">
    <div class="first-div-soignant">
      <h4>Liste des soignants ayant ajouté une formation</h4>

      <div class="search-bar">
        <font-awesome-icon class="icon" :icon="`fas fa-magnifying-glass`" />
        <input type="text">
      </div>
    </div>
    <div class="main-div-soignant row row-cols-1 row-cols-md-3 g-4">
      <div v-for="soignant in getSoignants" :key="soignant.index" class="col card-profesional">
        <router-link class="link-profil" :to="{name: 'soignant_id',params: { id: soignant.id }}">
        <div class="h-100">
          <img src="../assets/jaji.svg" class="card-img-top profil-soignant" alt="test">
          <div class="card-body d-flex flex-column">
            <span class="card-title">{{soignant.firstName}} {{soignant.lastName}}</span>
            <span class="card-text"> {{soignant.catégorie}}</span>
            <button  class="btn"><a :href="soignant.doctolib" class="card-text"> Doctolib</a></button>
          </div>
        </div>
        </router-link>
        <button @click="showModal = true">Open Modal</button>
            <ModalPopup v-if="showModal" @close="showModal = false" >
              <ProfilProfesional/>
              <button @click="showModal = false">ALLO Fermer la fenêtre modale</button>
            </ModalPopup>
            
            <ModalPopup v-if="showModal === 5" @close="showModal = patate" >
              <FormationForm/>
            </ModalPopup>

            
            <div class="vue-modal" v-show="showModal">
    <div class="vue-modal-inner">
      <div class="vue-modal-content">
        <font-awesome-icon class="close-cross" name="close" @click="$emit('close')" icon="fas fa-close" />
        <slot />

      </div>
    </div>

  </div>


      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

import FormationForm from "@/components/forms/FormationForm.vue";
import ProfilProfesional from "@/views/PersonalFileProfesional.vue";

export default {
  methods: {
    filteredList() {
  return this.getSoignants.filter((soignant) =>
      soignant
  );
}
  },
  components: {FontAwesomeIcon},
  components: { FormationForm, ProfilProfesional},
  data(){
    return {
      showModal: false
    }
  },
  created() {
    this.$store.dispatch("fetchSoignants");
  },
  watch: {
    month () {
      this.$store.dispatch("fetchSoignants")
    }
  },
  computed: {
    ...mapGetters([
      'getSoignants'
    ]),}
}
</script>

<style scoped lang="scss">
@import url("../assets/fonts/fonts.scss");

.main-div-profesional{
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  background-color: white;
  margin-left: 7.5rem;
}
.main-div-soignant{
  margin: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;


}
.card-profesional{
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  max-width: 15rem;
  font-size: 12px;
  span{
    font-family: "source-pro-regular";
  }

}



.card-profesional:hover,
.card:hover{
  background-color: #d5e4f6;
  transition: all 1s;
}


.profil-soignant{
  max-height: 10rem;
  max-width: 10rem;
}

button{
  margin-left: auto;
  margin-right: auto;
  max-width: 5rem;
  margin-top: 1rem;
  background-color: #5E82B6;
  color: white;
}
button:hover,
a:hover{
   background-color: lightgrey;
   color: #5E82B6;
 }
a{
  font-size: 12px;
  text-decoration: none;
  color: white;
}

.first-div-soignant{
  font-family: "source-pro-regular";
  padding: 1rem;
  margin-left: 1rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.05);
  top: 0;
  background-color: white;
  z-index: 10;
}

h4{
  padding-left: 1rem;
  border-left: 3px solid rgba(0, 0, 0, 0.5);
}

.link-profil{
  color: black;
}

.search-bar{
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  .icon{
    padding-left: 0.5rem;
  }

}
input{
  border: none;
  outline: none;
}

</style>