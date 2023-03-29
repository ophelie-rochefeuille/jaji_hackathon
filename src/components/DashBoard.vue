<template>
    <div class="d-inline-flex dashboard-container" style="width: 100% !important; height : 100% !important">
        <side-bar></side-bar>
        <br>
        <div class="container-fluid main-content d-flex justify-content-center align-items-center"> <!-- add main-content class -->
            <div class="container d-block align-items-center">
                <h1 class="my-3" style="text-align: start;">Mes soins</h1>
                <div class="col-12 w-100 mb-2 d-inline-flex justify-content-center align-items-center" style="height: 21%; border: 3px solid #d5e4f6 !important; border-radius: 8px;">
                    <div>
                        <button class="btn btn-primary rounded-circle prev-btn" @click.prevent="previousParcours()" style="margin-right: 2rem !important; width: 34px !important; height: 34px !important;">
                            <font-awesome-icon icon="fas fa-chevron-left" />
                        </button>
                    </div>
                    <div class="col-10 d-flex align-items-center justify-content-center" style="max-height: 42px;">
                        <div class="d-inline-flex justify-content-between w-100 align-items-center">
                            <div v-for="parcours in filteredParcours" :key="parcours.id" class="text-center parcours-block" @click.prevent="redirectToParcours(parcours.id)">
                                <img src="../assets/logo-jaji.png" style="max-width: 60px; max-height: 50px;">
                                <div style="font-size: small !important;">{{ parcours.title }}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary rounded-circle next-btn" @click.prevent="nextParcours()" style="margin-left: 2rem !important; width: 34px !important; height: 34px !important;">
                            <font-awesome-icon icon="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>
                <h1 class="my-3" style="text-align: start;">Mes formations</h1>
                <div class="col-12 w-100 mb-2 d-inline-flex justify-content-center align-items-center" style="height: 21%; border: 3px solid #d5e4f6 !important; border-radius: 8px;">
                    <div>
                        <button class="btn btn-primary rounded-circle prev-btn" @click.prevent="previousFormations()" style="margin-right: 2rem !important; width: 34px !important; height: 34px !important;">
                            <font-awesome-icon icon="fas fa-chevron-left" />
                        </button>
                    </div>
                    <div class="col-10 d-flex align-items-center justify-content-center" style="max-height: 42px;">
                        <div class="d-inline-flex justify-content-between w-100 align-items-center">
                            <div v-for="formation in filteredFormations" :key="formation.id" class="text-center formation-block" @click.prevent="redirectToFormation(formation.id)">
                                <img src="../assets/logo-jaji.png" style="max-width: 60px; max-height: 50px;">
                                <div style="font-size: small !important;">{{ formation.title }}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary rounded-circle next-btn" @click.prevent="nextFormations()" style="margin-left: 2rem !important; width: 34px !important; height: 34px !important;">
                            <font-awesome-icon icon="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>
                <h1 class="my-3" style="text-align: start;">Soignants</h1>
                <div class="col-12 w-100 mb-2 d-inline-flex justify-content-center align-items-center" style="height: 30%; border: 3px solid #d5e4f6 !important; border-radius: 8px;">
                    <div>
                        <button class="btn btn-primary rounded-circle prev-btn" @click.prevent="previousSoignants()" style="margin-right: 2rem !important; width: 34px !important; height: 34px !important;">
                            <font-awesome-icon icon="fas fa-chevron-left" />
                        </button>
                    </div>
                    <div class="col-10 d-flex align-items-center justify-content-center" style="max-height: 42px;">
                        <div class="d-inline-flex justify-content-between w-100 align-items-center">
                            <div v-for="soignant in filteredSoignants" :key="soignant.id" class="text-center soignant-block" @click.prevent="redirectToSoignant(soignant.id)">
                                <div>
                                    <img src="../assets/logo-jaji.png" style="max-width: 60px; max-height: 50px;">
                                    <br>
                                    <div style="font-size: small !important;">{{ soignant.title }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary rounded-circle next-btn" @click.prevent="nextSoignants()" style="margin-left: 2rem !important; width: 34px !important; height: 34px !important;">
                            <font-awesome-icon icon="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import SideBar from './SideBar.vue'
//   import axios from 'axios'; // pour faire des requêtes http
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  library.add(fas);
  
  export default {
    components: {
        'font-awesome-icon': FontAwesomeIcon,
        'side-bar': SideBar,
      
    },
    data () {
      return {
        formations: [
            {
                id: 1,
                title: 'Formation 1',
                // faut ajouter le champ image ici pour changer l'image
            },
            {
                id: 2,
                title: 'Formation 2'
            },
            {
                id: 3,
                title: 'Formation 3',
            },
            {
                id: 4,
                title: 'Formation 4'
            },
            {
                id: 5,
                title: 'Formation 5'
            },
            {
                id: 6,
                title: 'Formation 6'
            },
            {
                id: 7,
                title: 'Formation 7'
            },
            {
                id: 8,
                title: 'Formation 8'
            },
            {
                id: 9,
                title: 'Formation 9'
            }
        ],
        parcours: [
            {
                id: 1,
                title: 'Parcours 1',
                // faut ajouter le champ image ici pour changer l'image
            },
            {
                id: 2,
                title: 'Parcours 2'
            },
            {
                id: 3,
                title: 'Parcours 3',
            },
            {
                id: 4,
                title: 'Parcours 4'
            },
            {
                id: 5,
                title: 'Parcours 5'
            },
            {
                id: 6,
                title: 'Parcours 6'
            },
            {
                id: 7,
                title: 'Parcours 7'
            },
            {
                id: 8,
                title: 'Parcours 8'
            },
            {
                id: 9,
                title: 'Parcours 9'
            }
        ],
        soignants: [
            {
                id: 1,
                title: 'Soignant 1',
                // faut ajouter le champ image ici pour changer l'image
            },
            {
                id: 2,
                title: 'Soignant 2'
            },
            {
                id: 3,
                title: 'Soignant 3',
            },
            {
                id: 4,
                title: 'Soignant 4'
            },
            {
                id: 5,
                title: 'Soignant 5'
            },
            {
                id: 6,
                title: 'Soignant 6'
            },
            {
                id: 7,
                title: 'Soignant 7'
            },
            {
                id: 8,
                title: 'Soignant 8'
            },
            {
                id: 9,
                title: 'Soignant 9'
            }
        ],
        currentFormationIndex: 0,
        currentParcoursIndex: 0,
        currentSoignantIndex: 0,
      }
    },
    mounted () {
    //   this.getFormations()
    //   this.getParcours()
    //   this.getSoignants()
    },
    computed: {
        filteredFormations () {
            return this.formations.slice(this.currentFormationIndex, this.currentFormationIndex + 5) // 5 formations par page
        },
        filteredParcours () {
            return this.parcours.slice(this.currentParcoursIndex, this.currentParcoursIndex + 5) // 5 parcours par page
        },
        filteredSoignants () {
            return this.soignants.slice(this.currentSoignantIndex, this.currentSoignantIndex + 5) // 5 soignants par page
        }
    },
    methods: {
        // getFormations () { // TODO Faut changer en POST avec body {userid: 1}
        //     // let formData = {
        //     //     userid: 1,
        //     // };
        //     axios.get('http://localhost:8000/user')
        //         .then(response => {
        //             // console.log(response.data);
        //         })
        //         .catch(error => {
        //             // console.error(error);
        //         });
        // },
        // getParcours () { // TODO Faut changer en POST avec body {userid: 1}
        //     axios.get('http://localhost:8000/parcours')
        //         .then(response => {
        //             // console.log(response.data);
        //         })
        //         .catch(error => {
        //             // console.error(error);
        //         });
        // },
        // getSoignants () {
        //     axios.get('http://localhost:8000/soignant')
        //         .then(response => {
        //             // console.log(response.data);
        //         })
        //         .catch(error => {
        //             // console.error(error);
        //         });
        // },
        // redirectToFormation (id) {
        //     // this.$router.push({ name: 'formation', params: { id: id } }) //TODO a changer
        // },
        // redirectToParcours (id) {
        //     // this.$router.push({ name: 'parcours', params: { id: id } })
        // },
        // redirectToSoignant (id) {
        //     // this.$router.push({ name: 'soignant', params: { id: id } })
        // },
        nextFormations () {
            if (this.currentFormationIndex + 5 > this.formations.length) { // Si on est à la dernière page
               return
            }
            else if (this.formations.length - (this.currentFormationIndex + 5) < 5) { 
                this.currentFormationIndex += this.formations.length - (this.currentFormationIndex + 5)
            }
            else if (this.currentFormationIndex < this.formations.length - 5) {
                this.currentFormationIndex += 5
            } else {
                this.currentFormationIndex += this.formations.length % 5
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
            if (this.currentParcoursIndex + 5 > this.parcours.length) { // Si on est à la dernière page
               return
            }
            else if (this.parcours.length - (this.currentParcoursIndex + 5) < 5) { 
                this.currentParcoursIndex += this.parcours.length - (this.currentParcoursIndex + 5)
            }
            else if (this.currentParcoursIndex < this.parcours.length - 5) {
                this.currentParcoursIndex += 5
            } else {
                this.currentParcoursIndex += this.parcours.length % 5
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
            if (this.currentSoignantIndex + 5 > this.soignants.length) { // Si on est à la dernière page
               return
            }
            else if (this.soignants.length - (this.currentSoignantIndex + 5) < 5) { 
                this.currentSoignantIndex += this.soignants.length - (this.currentSoignantIndex + 5)
            }
            else if (this.currentSoignantIndex < this.soignants.length - 5) {
                this.currentSoignantIndex += 5
            } else {
                this.currentSoignantIndex += this.soignants.length % 5
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
    }
  };
  </script>
  
  <style scoped>
  .main-content {
    width: 90%; /* Set the width of the main content to 87% (100% - 13% for the sidebar) */
    margin-left: 10%; /* Set the left margin to 13% (the width of the sidebar) */
    height: 100%;
    }

    h1{
        font-size: 28px !important;
    }

  .dashboard-container {
    height: 100% !important;
    flex-direction: row; /* Set the flex-direction property to row */
    width: 100% !important; /* Set the width to 100% */
    display: inline-flex !important;
  }
  .container-fluid {
    padding: 0;
    background-color: #f5f6f7;
  }
  
  .container-fluid .container {
    background-color: #ffffff;
    margin: 2rem;
    height: calc(100% - 4rem); /* Set the height to 100% minus the top and bottom margin */
    width: calc(100% - 4rem);
    border-radius: 8px;
  }

  .formation-block,
  .parcours-block {
    width: 110px;
    height: 110px;
    border: 1px solid #d5e4f6;
    border-radius: 8px;
    margin: 0 1rem;
    padding: 1rem;
    text-align: center;
  }

  .soignant-block {
    width: 110px;
    height: 150px;
    border: 1px solid #d5e4f6;
    border-radius: 8px;
    margin: 0 1rem;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

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
  </style>  
  