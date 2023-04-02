<template>
    <div class=" dashboard-container">
      <div class="first-div-soignant">
        <h4>Dashboard</h4>
        <button class="button-add" @click="isOpen = true"> <font-awesome-icon class="icon" :icon="`fas fa-circle-plus`" /> Ajouter un parcours de soin</button>
      </div>
        <div>
            <div>
                <p class="my-3 text-start">Mes parcours</p>
                <div class="first-div-dashboard mb-2" >
                    <div>
                        <button class="btn btn-primary rounded-circle prev-btn" @click.prevent="previousParcours()" >
                            <font-awesome-icon icon="fas fa-chevron-left" />
                        </button>
                    </div>
                    <div class="main-div-items">
                        <div class="items-dashboard">
                            <div v-for="parcours in filteredParcours" :key="parcours.id" class="div-card text-center parcours-block" @click.prevent="redirectToParcours(parcours.id)">
                                <div class="custom-card">
                                  <div class="content">
                                    <h2>{{ parcours.title }}</h2>
                                  </div>
                                  <img src="../assets/logo-jaji.png" >
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary rounded-circle next-btn" @click.prevent="nextParcours()" >
                            <font-awesome-icon icon="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>

                <p class="my-3 text-start">Mes formations</p>
                <div class="second-div-dashboard mb-2" >
                    <div>
                        <button class="btn btn-primary rounded-circle prev-btn" @click.prevent="previousFormations()" >
                            <font-awesome-icon icon="fas fa-chevron-left" />
                        </button>
                    </div>
                    <div class="main-div-items">
                        <div class="items-dashboard">
                            <div v-for="formation in filteredFormations" :key="formation.id" class="div-card text-center formation-block" @click.prevent="redirectToFormation(formation.id)">
                              <div class="custom-card">
                              <div class="content">
                                <h2>{{ formation.title }}</h2>
                              </div>
                                <img :src="formation.image" >
                             </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary rounded-circle next-btn" @click.prevent="nextFormations()" >
                            <font-awesome-icon icon="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>
                <p class="my-3 text-start">Liste des soignants</p>
                <div class=" third-div-dashboard  mb-2" >
                    <div>
                        <button class="btn btn-primary rounded-circle prev-btn" @click.prevent="previousSoignants()" >
                            <font-awesome-icon icon="fas fa-chevron-left" />
                        </button>
                    </div>
                    <div class="main-div-items">
                        <div class="items-dashboard">
                            <div v-for="soignant in filteredSoignants" :key="soignant.id" class="div-cards text-center soignant-block" @click.prevent="redirectToSoignant(soignant.id)">
                                <div class="custom-card">
                                    <div class="content">
                                      <h2>{{ soignant.firstName }} {{ soignant.lastName }}</h2>
                                    </div>
                                    <img :src="soignant.image">

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary rounded-circle next-btn" @click.prevent="nextSoignants()" >
                            <font-awesome-icon icon="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  <ModalAdd class="modal-charge" :open="isOpen" @close="isOpen = !isOpen">
    <h5 class="title-modal">Ajout d'un nouveau parcours</h5>
    <div class="step-one " v-show="currentPage === 1">
      <div class="first-div-modal">
        <label>Détails du parcours *</label>
        <input class="input" type="text" placeholder="Titre" v-model="title">
        <label>Description *</label>
        <input class="input" type="text" placeholder="Description" v-model="description">
      </div>
      <div class="buttons-div">
        <button v-show="currentPage !== 1" @click="prevPage"><font-awesome-icon icon="fas fa-chevron-left" /></button>
        <button v-show="currentPage !== 3" class="button-next" @click="nextPage"><font-awesome-icon icon="fas fa-chevron-right" /></button>
      </div>

    </div>

    <div class="step-two" v-show="currentPage === 2">
      <div class="second-div-modal">
        <label>Grandes étapes du parcours</label>
        <input v-model="value" v-on:keyup.enter="addValue">
        <ul>
          <li v-for="(val, index) in values" :key="val.index">{{ val }} <button class="button-delete-modal" @click="removeValues(index)">Supprimer</button> </li>

        </ul>

      </div>
      <div class="buttons-div">
        <button v-show="currentPage !== 1" @click="prevPage"><font-awesome-icon icon="fas fa-chevron-left" /></button>
        <button v-show="currentPage !== 3" class="button-next" @click="nextPage"><font-awesome-icon icon="fas fa-chevron-right" /></button>
      </div>
    </div>


    <div class="step-two" v-show="currentPage === 3">
      <div class="third-div-modal">
          <div class="main-div-questions">
            <label for="question1">Question 1 :</label>
            <input type="text" id="question1" v-model="question1">
            <div class="div-response">
              <input type="radio" id="q1_true" v-model="rep1" name="q1" value="true">
              <span for="q1_true">Vrai</span>
            </div>
            <div class="div-response">
              <input type="radio" id="q1_false" v-model="rep1" name="q1" value="false">
              <span for="q1_false">Faux</span>
            </div>
          </div>
          <div class="main-div-questions">
            <label for="question2">Question 2 :</label>
            <input type="text" id="question2" v-model="question2">
            <div class="div-response">
              <input type="radio" v-model="rep2" id="q2_true" name="q2" value="true">
              <span for="q2_true">Vrai</span>
            </div>
            <div class="div-response">
              <input type="radio" id="q2_false" name="q2" value="false">
              <span for="q2_false">Faux</span>
            </div>
          </div>
        <label for="video-link">Lien de la vidéo et image :</label>
        <input type="url" id="video-link" v-model="videoLink">
      </div>
      <div class="buttons-div">
        <button @click="postData()" class="button">Ok</button>
        <button v-show="currentPage !== 1" @click="prevPage"><font-awesome-icon icon="fas fa-chevron-left" /></button>
        <button v-show="currentPage !== 3" class="button-next" @click="nextPage"><font-awesome-icon icon="fas fa-chevron-right" /></button>
      </div>
    </div>
  </ModalAdd>
  </template>
  
  <script>
 import axios from 'axios'; // pour faire des requêtes http
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ModalAdd from "@/components/forms/ModalAdd.vue";
import {ref} from "vue";
import {mapGetters} from "vuex";
  
  library.add(fas);
  
  export default {
    components: {
      ModalAdd,
        'font-awesome-icon': FontAwesomeIcon,
      
    },
    setup(){
      const isOpen = ref(false);

      return { isOpen }
    },
    data () {
      return {
        fileUpdate: null,
        title:null,
        description:null,
        etape: {},
        question1:null,
        rep1:null,
        question2:null,
        rep2:null,
        videoLink: null,
        tag:null,
        video:null,
        currentPage: 1,
        value: '',
        valueTag:'',
        values: [],
        valuesTag: [],
        open: false,
        stepOne: true,
        stepTwo: false,
        stepThree: false,
        currentFormationIndex: 0,
        currentParcoursIndex: 0,
        currentSoignantIndex: 0,

      }
    },
    created() {
      this.$store.dispatch("fetchSoignants");
      this.$store.dispatch("fetchParcours");
      this.$store.dispatch("fetchFormations");
    },
    watch: {
      month () {
        this.$store.dispatch("fetchSoignants");
        this.$store.dispatch("fetchParcours");
        this.$store.dispatch("fetchFormations");
      }
    },
    computed: {
      ...mapGetters([
        'getSoignants', 'getParcours', 'getFormations'
      ]),
        filteredFormations () {
            return this.getFormations.slice(this.currentFormationIndex, this.currentFormationIndex + 5) // 5 formations par page
        },
        filteredParcours () {
            return this.getParcours.slice(this.currentParcoursIndex, this.currentParcoursIndex + 5) // 5 parcours par page
        },
        filteredSoignants () {
            return this.getSoignants.slice(this.currentSoignantIndex, this.currentSoignantIndex + 5) // 5 soignants par page
        }
    },
    methods: {
      postData(){
        const formData = new FormData()
        formData.append('title', this.title)
        formData.append('description', this.description)
        formData.append('chronologie',this.values)
        formData.append('question1', this.question1)
        formData.append('rep1', this.rep1)
        formData.append('question2', this.question2)
        formData.append('rep2', this.rep2)
        formData.append('video_url', this.videoLink)
        axios.post(`http://localhost:8000/parcours/new`, formData)
            .then( response => console.log(response), this.$store.dispatch("fetchParcours"))
            .catch(error => console.log(error))
        this.isOpen = !this.isOpen
        this.$store.dispatch("fetchParcours");
      },
      nextPage() {
        this.currentPage++;
      },
      prevPage() {
        this.currentPage--;
      },
      removeValues(index) {
        this.values.splice(index, 1);
      },
      removeValuesTag(index) {
        this.valuesTag.splice(index, 1);
      },
      addValue() {
        this.values.push(this.value);
        this.value = '';
      },
      addValueTag() {
        this.valuesTag.push(this.value);
        this.valueTag = '';
      },
      nextStep(){
        this.stepOne = !this.stepOne;
        this.stepTwo = !this.stepTwo
      },
      nextStepTwo(){
        this.stepTwo = !this.stepTwo;
        this.stepThree = !this.stepThree
      },
      nextStepThree(){
        this.stepThree = !this.stepThree
      },
        nextFormations () {
            if (this.currentFormationIndex + 5 > this.getFormations.length) { // Si on est à la dernière page
               return
            }
            else if (this.getFormations.length - (this.currentFormationIndex + 5) < 5) {
                this.currentFormationIndex += this.getFormations.length - (this.currentFormationIndex + 5)
            }
            else if (this.currentFormationIndex < this.getFormations.length - 5) {
                this.currentFormationIndex += 5
            } else {
                this.currentFormationIndex += this.getFormations.length % 5
            }
            
        },
        previousFormations () {
            if (this.currentFormationIndex > 0) {
                if (this.currentFormationIndex < 5) {
                    this.currentFormationIndex = 0
                } else {
                    this.currentFormationIndex -= 5
                }
            }
        },
        nextParcours () {
            if (this.currentParcoursIndex + 5 > this.getParcours.length) { // Si on est à la dernière page
               return
            }
            else if (this.getParcours.length - (this.currentParcoursIndex + 5) < 5) {
                this.currentParcoursIndex += this.getParcours.length - (this.currentParcoursIndex + 5)
            }
            else if (this.currentParcoursIndex < this.getParcours.length - 5) {
                this.currentParcoursIndex += 5
            } else {
                this.currentParcoursIndex += this.getParcours.length % 5
            }
        },
        previousParcours () {
            if (this.currentParcoursIndex > 0) {
                if (this.currentParcoursIndex < 5) {
                    this.currentParcoursIndex = 0
                } else {
                    this.currentParcoursIndex -= 5
                }
            }
        },
        nextSoignants () {
            if (this.currentSoignantIndex + 5 > this.getSoignants.length) { // Si on est à la dernière page
               return
            }
            else if (this.getSoignants.length - (this.currentSoignantIndex + 5) < 5) {
                this.currentSoignantIndex += this.getSoignants.length - (this.currentSoignantIndex + 5)
            }
            else if (this.currentSoignantIndex < this.getSoignants.length - 5) {
                this.currentSoignantIndex += 5
            } else {
                this.currentSoignantIndex += this.getSoignants.length % 5
            }
        },
        previousSoignants () {
            if (this.currentSoignantIndex > 0) {
                if (this.currentSoignantIndex < 5) {
                    this.currentSoignantIndex = 0
                } else {
                    this.currentSoignantIndex -= 5
                }
            }
        },
        redirectToParcours(id) {
            const baseUrl = window.location.origin;
            const fullPath = `${baseUrl}/soins/${id}`;
            window.location.href = fullPath;
        },
        redirectToFormation(id) {
          const baseUrl = window.location.origin;
          const fullPath = `${baseUrl}/formation/${id}`;
          window.location.href = fullPath;
        },
        redirectToSoignant(id) {
          const baseUrl = window.location.origin;
          const fullPath = `${baseUrl}/soignant/${id}`;
          window.location.href = fullPath;
        }
    }
  };
  </script>
  
  <style scoped lang="scss">
  @import url("../assets/fonts/fonts.scss");

  .div-card{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .div-card:hover{
    box-shadow: 1px 3px 6px rgba(213, 228, 246, 0.8);
    transition: all 0.5s;
  }
  .button-create{
    outline: none;
    border: none;
    background-color: #355070;
    border-radius: 4px;
    color: white;
    font-size: 12px;
    width: 30%;
    padding: 0.5rem;
    margin-top: 1rem;
  }
  .div-response{
    display: flex;
    align-items: center;
    font-size: 12px;
    input{
      margin-right: 0.5rem;
    }
  }
  .main-div-questions{
    display: flex;
    flex-direction: column;
  }
  .first-div-modal,
  .second-div-modal,
  .third-div-modal{
    display: flex;
    flex-direction: column;
    label {
      font-size: 10px;
      width: 30%;
      padding-left: 0.25rem;
      text-align: start;
      position: relative;
      top: 10px;
      color: dimgrey;
      background-color: white;
      margin-top: 0.5rem;
      margin-left: 0.5rem;
    }
    input{
      padding: 0.5rem;
      outline: none;
      border: 1px solid rgba(213, 228, 246, 0.8);
      border-radius: 4px;

    }
    ul{
      padding: 0;
    }
    li{
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
      text-decoration: none;
      list-style-type: none;
      margin-top: 0.5rem;
    }
    li:hover{
      box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.05);
    }

  }
  .button-delete-modal{
    background-color: white;
    color: #D45458;
    border: 1px solid #D45458;
    border-radius: 4px;
    outline: none;
    box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.05);
  }
  .main-div-items{
    width: 100%;
  }
  .img-dashboard{
    max-height: 100%;
    max-width: 100%;
    border-radius: 4px 4px 0px 0px;
    object-fit: cover;
  }

  .img-dashboard-soignants{
    max-height: 100px;
    max-width: 100px;
  }

  .button-add{
    padding: 0rem 0.5rem;
    margin-right: 2rem;
    background-color: #355070;
    color:white;
    border: none;
    border-radius: 4px;
  }

  .buttons-div{
    display: flex;
    justify-content: end;
    margin-top: 1rem;
    button{
      border: none;
      background-color: #355070;
      color: white;
      border-radius: 50%;
      padding: 0.5rem;
      height: 33px;
      width: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.5rem;
    }
  }
  .first-div-soignant{
    font-family: "source-pro-regular";
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    position: sticky;
    box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.05);
    top: 0;
    background-color: white;
    z-index: 10;
    button{
      font-size: 14px;
      font-family: source-pro-light;
    }
  }

  h4{
    padding-left: 1rem;
    border-left: 3px solid rgba(0, 0, 0, 0.5);
  }


  p{
    font-size: 16px;
  font-family: "source-pro-bold";
  }
  .items-dashboard{
    display: flex;
    justify-content: space-around;
  }
    .first-div-dashboard,
    .second-div-dashboard,
    .third-div-dashboard{
      padding: 0.5rem;
      margin: 0.5rem 3rem;
     box-shadow: 2px 3px 6px rgba(213, 228, 246, 1);
      //border: 2px solid #d5e4f6;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  .dashboard-container {
    margin-left: 7rem;
    flex-direction: row;
    span{
      font-size: 16px;
      text-align: start;
    }
  }


  .formation-block,
  .parcours-block,
  .soignant-block{
    border: 1px solid #d5e4f6;
    border-radius: 8px;
    margin: 0.5rem;
    padding: 0.5rem;
    text-align: center;
  }


  .next-btn:hover,
  .prev-btn:hover {
    background-color: #ffbe1a !important
  }

  .formation-block:hover,
  .soignant-block:hover,
  .parcours-block:hover {
    background-color: #d5e4f6;
    cursor: pointer;
  }
  .illu-embed, .title-embed {
    height: 50%;
  }

  .custom-card {
    width: auto;
    height: 11.75rem;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
  }

  .custom-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .custom-card .content {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    padding: 30px 20px 20px 20px;
    height: auto;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  }
  .custom-card h2 {
  margin: 0;
  font-size: 17px;
  color: #fff;
  margin-bottom: 4px;
  }

  .my-3 {
    border-left: 3px solid rgba(0, 0, 0, 0.5);
    padding-left: 0.5rem;
    margin-left: 3rem;
  }
  </style>  
  