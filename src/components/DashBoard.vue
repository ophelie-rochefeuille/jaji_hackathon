<template>
    <div class="d-inline-flex dashboard-container" style="width: 100% !important; height : 100% !important">
        <side-bar></side-bar>
        <br>
        <div class="container-fluid main-content d-flex justify-content-center align-items-center"> <!-- add main-content class -->
            <div class="container d-block align-items-center">
                <h1 style="text-align: start;">Mes soins</h1>
                <div class="col-12 w-100 mb-4 d-flex justify-content-center align-items-center" style="height: 21%; border: 3px solid #d5e4f6; !important; border-radius: 8px;">
                    <div class="row mt-4">
                        <div class="col-12 justify-content-start">
                            
                        </div>
                    </div>
                </div>
                <h1 style="text-align: start;">Mes formations</h1>
                <div class="col-12 w-100 mb-4 d-inline-flex justify-content-center align-items-center" style="height: 21%; border: 3px solid #d5e4f6 !important; border-radius: 8px;">
                    <div class="col-10 d-flex align-items-center justify-content-center" style="max-height: 42px;">
                        <div class="d-inline-flex justify-content-between w-100 align-items-center">
                            <div v-for="formation in formations" :key="formation.id" class="text-center mx-2 formation-block">
                                <img src="../assets/logo-jaji.png" style="max-width: 60px; max-height: 50px;">
                                <div>{{ formation.title }}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary rounded-circle" style="margin-left: 2rem !important;">&gt;</button>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 justify-content-start">
                        <h1 style="text-align: start;">Soignants</h1>
                    </div>
                </div>
                <div class="col-12 w-100 mb-4" style="height: 30%; border: 3px solid #d5e4f6 !important; border-radius: 8px;"></div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import SideBar from './SideBar.vue'
  import axios from 'axios';
  
  export default {
    components: {
      'side-bar': SideBar,
    },
    data () {
      return {
        formations: [
            {
                id: 1,
                title: 'Formation 1',
                description: 'Text example 1',
                soignant: {
                id: 1,
                firstname: 'Jean',
                lastname: 'Dupont',
                category: 'Infirmier',
                doctorlib_url: 'https://www.doctorlib.fr/infirmier/jean-dupont',
                num_national: '',
                },
                url: '',
                parcours: {
                id: 1,
                title: 'Parcours 1',
                description: 'Text example 2',
                user_id: 1,
                }
            },
            {
                id: 2,
                title: 'Formation 2',
                description: 'Text example 3',
                soignant: {
                id: 2,
                firstname: 'Marie',
                lastname: 'Martin',
                category: 'Médecin',
                doctorlib_url: 'https://www.doctorlib.fr/medecin/marie-martin',
                num_national: '',
                },
                url: '',
                parcours: {
                id: 2,
                title: 'Parcours 2',
                description: 'Text example 4',
                user_id: 2,
                }
            },
            {
                id: 3,
                title: 'Formation 3',
                description: 'Text example 5',
                soignant: {
                id: 3,
                firstname: 'Pierre',
                lastname: 'Durand',
                category: 'Kinésithérapeute',
                doctorlib_url: 'https://www.doctorlib.fr/kinesitherapeute/pierre-durand',
                num_national: '',
                },
                url: '',
                parcours: {
                id: 3,
                title: 'Parcours 3',
                description: 'Text example 6',
                user_id: 3,
                }
            },
            {
                id: 4,
                title: 'Formation 4',
                description: 'Text example 7',
                soignant: {
                id: 4,
                firstname: 'Paul',
                lastname: 'Lefebvre',
                category: 'Infirmier',
                doctorlib_url: 'https://www.doctorlib.fr/infirmier/paul-lefebvre',
                num_national: '',
                },
                url: '',
                parcours: {
                id: 4,
                title: 'Parcours 4',
                description: 'Text example 8',
                user_id: 4,
                }
            }
        ],
        parcours: [],
        soignants: [],
      }
    },
    mounted () {
      this.getFormations()
    },
    methods: {
        getFormations () {
            // let formData = {
            //     userid: 1,
            // };
            axios.get('http://localhost:8000/user')
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            },
    }
  };
  </script>
  
  <style scoped>

  *{
    height: 100%;
  }
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

  .formation-block:hover {
    background-color: #d5e4f6;
    cursor: pointer;
  }
  </style>  
  