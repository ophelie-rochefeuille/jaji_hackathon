// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from '../components/HomePage.vue'
// import ConnexionPage from '../components/ConnexionPage.vue'
import LoginForm from '../components/LoginForm.vue'

import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js' 

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
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router