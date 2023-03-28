// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from '../components/HomePage.vue'
import ConnexionPage from '../components/ConnexionPage.vue'



import { createRouter, createWebHistory } from 'vue-router';

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
  {
    path: '/log',
    name: 'connexion',
    component: ConnexionPage
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router