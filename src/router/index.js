import { createRouter, createWebHistory } from 'vue-router';



// Composents accueil
import Apropos from '@/components/Accueil/Apropos.vue';
import Contact from '@/components/Accueil/Contact.vue';
import Logements from '@/components/Accueil/Logements.vue';
import PortailAccueil from '@/components/Accueil/PortailAccueil.vue';
import DetailsLogement from '@/components/Accueil/DetailsLogement.vue';

//authentification composant
import Register from '@/Auth/UserRegister.vue';
import Login from '@/Auth/LoginRegister.vue';

// Logement CRUD composents
import LogementList from '@/components/LogementList.vue';
import LogementCreate from '@/components/LogementCreate.vue';
import LogementUpdate from '@/components/LogementUpdate.vue';


import AccueilLocataire from '@/components/AccueilLocataire.vue';

//CReservation composent
import ReservationList from '../components/ReservationList.vue';
// import CreateReservation from '../components/CreateReservation.vue';
import ViewReservation from '../components/ViewReservation.vue';
import UpdateReservation from '../components/UpdateReservation.vue';

// Definition routes
const routes = [
  { path: '/', name: 'Portail', component: PortailAccueil },
  { path: '/apropos', name: 'Apropos', component: Apropos },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/logements', name: 'Logements', component: Logements },
  {
    path: '/details/:id',
    name: 'Details',
    component: DetailsLogement,
    props: true // Permet de passer l'ID comme prop au composant
  },
  


  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },

 


  {path:  '/Accueillocataire', name: 'Locataire', component: AccueilLocataire },


  // Logement CRUD routes
  { path: '/logementProprietaire', name: 'LogementList', component: LogementList },
  { path: '/logements/create', name: 'LogementCreate', component: LogementCreate },
  { path: '/logements/:id/edit', name: 'LogementUpdate', component: LogementUpdate },



  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/components/CategorieList.vue') // Vue pour lister les catégories
  },
  {
    path: '/categories/new',
    name: 'NewCategorie',
    component: () => import('@/components/CategorieCreate.vue') // Vue pour créer une nouvelle catégorie
  },
  {
    path: '/categories/edit/:id',
    name: 'EditCategorie',
    component: () => import('@/components/CategorieUpdate.vue') // Vue pour éditer une catégorie
  },

  {
    path: '/reservations',
    name: 'ReservationList',
    component: ReservationList, // Page pour lister les réservations de l'utilisateur connecté
  },
  // {
  //   path: '/reservations/new',
  //   name: 'CreateReservation',
  //   component: CreateReservation, // Page pour créer une nouvelle réservation
  // },
  {
    path: '/reservations/:id',
    name: 'ViewReservation',
    component: ViewReservation, // Page pour visualiser les détails d'une réservation
    props: true, // Permet de passer l'ID en tant que prop
  },
  {
    path: '/reservations/:id/edit',
    name: 'UpdateReservation',
    component: UpdateReservation, // Page pour mettre à jour une réservation existante
    props: true,
  }
  
];




// Creating the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
