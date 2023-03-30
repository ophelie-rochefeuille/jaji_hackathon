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
          <button @click="showModal = false" class="closeModale">ALLO Fermer la fenêtre modale</button>
          <ProfilProfesional>
            
          </ProfilProfesional>
        </ModalPopup>





      </div>
    </div>
  </div>
  <button class="button-add" @click="isOpen = true"> Ajouter un parcours de soin</button>
  <ModalProfil class="modal-charge" :open="isOpen" @close="isOpen = !isOpen">
    <div class="main-div-profesional">
      <div class="first-div-soignant">
            <h4>Profil du soignant</h4>
          </div>
      <div class="content">


        <div class="main-div-profil">

          <div class="secondary-div-profil">
            <div class="details-profil">
              <h1>{{getOneSoignant.firstName}} Dan Dan {{getOneSoignant.lastName}}</h1>
              <h2>Métier</h2>
              <h4>{{getOneSoignant.catégorie}} Urologue</h4>
              <h2>Email</h2>
              <h4>{{getOneSoignant.numero}}+33 36 30 36 30</h4>
              <h2>Adresse</h2>
              <h4>{{getOneSoignant.doctolib}} 145 rue de la Fayette, 75010</h4>
              <h2>Doctolib</h2>
              <a href={{getOneSoignant.doctolib}}>{{getOneSoignant.doctolib}} http://doctolib/suite/lien</a>
            <!-- </div> -->


          <!-- </div> -->

          <div class="details-formations-profil">
            <h1 class="text-start">Historique de formations :</h1>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/health.jpg" class=" w-50" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/health.jpg" class=" w-50" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/health.jpg" class=" w-50" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div class="second-div-profil">
        <div class="details-picture-profil">
            <img src="../assets/login-pic.svg">
          </div> 
      </div>

      </div>

    </div>
  </ModalProfil>
</template>

<script>
import {mapGetters} from "vuex";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ModalProfil from "@/components/forms/ModalProfilProfesional.vue";
import {ref} from "vue";
library.add(fas);

import ProfilProfesional from "@/views/PersonalFileProfesional.vue";

export default {
  methods: {
    filteredList() {
  return this.getSoignants.filter((soignant) =>
      soignant
  );
}
  },
  components: { FontAwesomeIcon, ProfilProfesional, ModalProfil},
  setup(){
    const isOpen = ref(false);
    return {isOpen}
  },
  data(){
    return {
      showModal: false,

      open: false,
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
.closeModale {
  position: absolute;
  z-index: 9999;
}
</style>