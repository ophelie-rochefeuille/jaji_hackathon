<!-- <template>
    <div class="side ">
        <div class="d-flex justify-content-center align-items-center">
            <img src="../assets/logo-jaji.png" style="transform: scale(0.7) !important;" alt="Logo">
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <ul style="padding: 0" class="justify-content-center d-block w-100">
                    <li v-for="item in menuItems" :key="item.id" class="d-block justify-content-center my-2">
                     <a :href="item.link" class="d-flex flex-column justify-content-center align-items-center my-2 py-auto"  :class="{ active: isActive(item.link) }">
                        <font-awesome-icon :icon="`fas fa-${item.icon}`" />
                        <span class="mt-2">{{ item.title }}</span>
                    </a>
                    </li>
                </ul>
        </div>
    </div>
</template> -->

<template>
    <div class="side d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-center align-items-center mt-3 mb-3">
            <img src="../assets/logo-jaji.png" style="transform: scale(0.7) !important;" alt="Logo">
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <ul style="padding: 0" class="justify-content-center d-block w-100">
                <li v-for="item in menuItems" :key="item.id" class="d-block justify-content-center my-2">
                <a :href="item.link" class="d-flex flex-column justify-content-center align-items-center my-2 py-auto" :class="{ active: isActive(item.link) }">
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

    library.add(fas);
  
    export default {
        components: {
        FontAwesomeIcon,
        },
        data() {
            return {
                menuItems: [
                { id: 1, title: 'Accueil', icon: "house", link: '/dashboard' },
                { id: 2, title: 'Profil', icon: "user", link: '/profil' },
                { id: 3, title: 'Suivi soins', icon: "notes-medical", link: '/soins' },
                { id: 4, title: 'Formations', icon: "book", link: '/formations' },
                { id: 5, title: 'Soignants', icon: "user-doctor", link: '/soignants' },
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
                // this.$store.dispatch('logout');
                // this.$router.push({ name: 'login' });
            }
        }
    }
</script>
  
  <style scoped>
    .side {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 10%;
        background-color: #ffffff;
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
        min-height: 80px;
        width: 100%;
    }

    .side li a:hover,
    .side li a.active {
        border-left: 10px solid #5e82b6;
        background-color: #d5e4f6;
    }   


  </style>
  