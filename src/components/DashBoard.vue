<template>
    <div class=" dashboard-container">
        <div>
            <div>
                <span class="my-3 text-start">Mes parcours</span>
                <div class="first-div-dashboard mb-2" >
                    <div>
                        <button class="btn btn-primary rounded-circle prev-btn" @click.prevent="previousParcours()" >
                            <font-awesome-icon icon="fas fa-chevron-left" />
                        </button>
                    </div>
                    <div class="main-div-items">
                        <div class="items-dashboard">
                            <div v-for="parcours in filteredParcours" :key="parcours.id" class="text-center parcours-block" @click.prevent="redirectToParcours(parcours.id)">
                                <img class="img-dashboard" src="../assets/logo-jaji.png" >
                                <div >{{ parcours.title }}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary rounded-circle next-btn" @click.prevent="nextParcours()" >
                            <font-awesome-icon icon="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>

                <span class="my-3 text-start">Mes formations</span>
                <div class="second-div-dashboard mb-2" >
                    <div>
                        <button class="btn btn-primary rounded-circle prev-btn" @click.prevent="previousFormations()" >
                            <font-awesome-icon icon="fas fa-chevron-left" />
                        </button>
                    </div>
                    <div class="main-div-items">
                        <div class="items-dashboard">
                            <div v-for="formation in filteredFormations" :key="formation.id" class="text-center formation-block" @click.prevent="redirectToFormation(formation.id)">
                                <img class="img-dashboard" src="../assets/logo-jaji.png" >
                                <div >{{ formation.title }}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary rounded-circle next-btn" @click.prevent="nextFormations()" >
                            <font-awesome-icon icon="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>
                <span class="my-3 text-start">Liste des soignants</span>
                <div class=" third-div-dashboard  mb-2" >
                    <div>
                        <button class="btn btn-primary rounded-circle prev-btn" @click.prevent="previousSoignants()" >
                            <font-awesome-icon icon="fas fa-chevron-left" />
                        </button>
                    </div>
                    <div class="main-div-items">
                        <div class="items-dashboard">
                            <div v-for="soignant in filteredSoignants" :key="soignant.id" class="text-center soignant-block" @click.prevent="redirectToSoignant(soignant.id)">
                                <div>
                                    <img class="img-dashboard" src="../assets/logo-jaji.png">

                                    <div>{{ soignant.title }}</div>
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
  </template>
  
  <script>
//   import axios from 'axios'; // pour faire des requêtes http
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  library.add(fas);
  
  export default {
    components: {
        'font-awesome-icon': FontAwesomeIcon,
      
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
  
  <style scoped lang="scss">

  .main-div-items{
    width: 100%;
  }
  .img-dashboard{
    max-height: 90px;
    max-width: 90px;
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
     // box-shadow: 2px 3px 6px rgba(213, 228, 246, 1);
      border: 2px solid #d5e4f6;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  .dashboard-container {
    margin-left: 7.5rem;
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
  </style>  
  