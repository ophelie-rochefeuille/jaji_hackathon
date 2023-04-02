
import LoginForm from '../components/LoginForm.vue'
import DashBoard from '../components/DashBoard.vue'
import SuiviSoin from '../components/SuiviSoin.vue'
import FormationPage from '../components/FormationPage.vue'
import SoinIdPage from '../components/MySoins.vue'
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import MyProfesional from "@/views/ComponentProfesional.vue";
import PersonalFileProfesional from "@/views/PersonalFileProfesional.vue";


/* add icons to the library */
library.add(faUserSecret)

const routes = [

  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/',
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
  },
  {
    path: '/formation',
    name: 'formation',
    component: FormationPage
  },
  {
    path: '/soins/:id',
    name: 'soins_id',
    component: SoinIdPage
  },
  {
    path: '/soins',
    name: 'soins',
    component: SuiviSoin
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router