
<template>
    <div class="main-div-side-bar side d-flex flex-column justify-content-around">
        <div class="d-flex justify-content-center align-items-center mt-4">
            <img src="../assets/jaji.svg" style="transform: scale(0.7) !important;" alt="Logo">
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <ul style="padding: 0" class="justify-content-center d-block w-100">
                <li class="d-block justify-content-center my-2">
                    <a v-for="item in menuItems" :key="item.id" @click.prevent="redirect(item.link)" class="d-flex flex-column justify-content-center align-items-center my-2 py-auto">
                        <font-awesome-icon :icon="`fas fa-${item.icon}`" />
                        <span class="mt-2">{{ item.title }}</span>
                    </a>
                </li>
            </ul>
        </div>
            <div class="d-flex justify-content-center align-items-center mb-3">
            <button class="btn btn-primary" @click="logout()">Logout</button>
        </div>
    </div>
</template>
  
<script>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { fas } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import axios from "axios";

    library.add(fas);
  
    export default {
        components: {
        FontAwesomeIcon,
        },
        data() {
            return {
                menuItems: [
                { id: 1, title: 'Accueil', icon: "house", link: '/' },
                { id: 3, title: 'Suivi soins', icon: "notes-medical", link: 'soins' },
                { id: 4, title: 'Formations', icon: "book", link: 'formation' },
                { id: 5, title: 'Soignants', icon: "user-doctor", link: 'soignant' },
                ]
            }
        },
        computed: {
            currentRoute() {
                return this.$route.name;
            }
        }, 
        methods:{
            isActive(link) {
                return this.$route.name.replace(/^\//, '') === link.replace(/^\//, '')
            },
          logout() {
            function clearAuthToken() {
              axios.defaults.headers.common['Authorization'] = ''
              localStorage.setItem('authToken', '')
            }
            clearAuthToken()
            window.open('http://127.0.0.1:8080');
          },
            redirect(routeName) {
                const baseUrl = window.location.origin;
                window.location.href = routeName != '/' ? `${baseUrl}/${routeName}` : `${baseUrl}`;
            }
        }
    }
</script>
  
  <style scoped>


    .side {
        position: fixed;
        top: 0;
        left: 0;
        background-color: #ffffff;
        height: 100vh;
        width: 7rem;
        box-sizing: border-box;
    }

    .side li {
        display: flex;
        align-items: center;
        width: 100%;
    }
    

    .side li a {
        display: flex ;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #1f2f42 !important;
        transition: all 0.2s ease-in-out;
      padding: 0.5rem 0rem;

    }

    .side li a:hover,
    .side li a.active {
        border-left: 10px solid #5e82b6;
        background-color: #d5e4f6;
    }   

    .activeLink{
      background-color: #d5e4f6;
    }
  .main-div-side-bar{
    background-color: #FAFAFA;
  }
  </style>
  