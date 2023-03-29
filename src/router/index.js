// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from '../components/HomePage.vue'
// import ConnexionPage from '../components/ConnexionPage.vue'
import LoginForm from '../components/LoginForm.vue'
import DashBoard from '../components/DashBoard.vue'

import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js' 

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUserSecret)

// import Dashboard from "../views/Dashboard"; - Dashboard / visualisation parcours / 
// vue : dashborad / formation en détail / ?profil / visu parcours
// import NewData from "../views/NewData";
// import Settings from "../views/Settings";
// import Params from "../views/Params";

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
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router