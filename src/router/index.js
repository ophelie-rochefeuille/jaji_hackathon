
import Home from '../components/HomePage.vue'
import LoginForm from '../components/LoginForm.vue'
import DashBoard from '../components/DashBoard.vue'
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import MyProfesional from "@/views/ComponentProfesional.vue";
import PersonalFileProfesional from "@/views/PersonalFileProfesional.vue";

library.add(faUserSecret)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Home
  },
  // {
  //   path: '/login',
  //   name: 'connexion',
  //   component: ConnexionPage
  // },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/soignant',
    name: 'soignant',
    component: MyProfesional
  },
  {
    path: '/soignant/:id',
    name: 'soignant_id',
    component: PersonalFileProfesional
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router