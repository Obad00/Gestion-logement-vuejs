import { createRouter, createWebHistory } from 'vue-router';
import Swal from 'sweetalert2';

// Importation des composants (comme dans votre code actuel)
import Apropos from '@/components/Accueil/Apropos.vue';
import Contact from '@/components/Accueil/Contact.vue';
import Logements from '@/components/Accueil/Logements.vue';
import PortailAccueil from '@/components/Accueil/PortailAccueil.vue';
import DetailsLogement from '@/components/Accueil/DetailsLogement.vue';

import Register from '@/Auth/UserRegister.vue';
import Login from '@/Auth/LoginRegister.vue';

import LogementList from '@/components/Proprietaire/LogementList.vue';
import LogementCreate from '@/components/Proprietaire/LogementCreate.vue';
import LogementUpdate from '@/components/Proprietaire/LogementUpdate.vue';

import AccueilLocataire from '@/components/Locataire/AccueilLocataire.vue';
import ReservationList from '../components/Proprietaire/ReservationList.vue';
import ViewReservation from '../components/Proprietaire/ViewReservation.vue';
import UpdateReservation from '../components/Proprietaire/UpdateReservation.vue';

import ListReservation from '../components/Locataire/ListReservation.vue';
import DemandeLogement from '@/components/Locataire/DemandeLogement.vue';


// Définition des routes
const routes = [
  { path: '/', name: 'Portail', component: PortailAccueil },
  { path: '/apropos', name: 'Apropos', component: Apropos },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/logements', name: 'Logements', component: Logements },
  {
    path: '/details/:id',
    name: 'Details',
    component: DetailsLogement,
    props: true
  },
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/Accueillocataire', name: 'Locataire', component: AccueilLocataire, meta: { requiresAuth: true }  },

  // Logement CRUD routes protégées
  {
    path: '/logementProprietaire',
    name: 'LogementList',
    component: LogementList,
    meta: { requiresAuth: true } // Ajout de guard
  },
  {
    path: '/logements/create',
    name: 'LogementCreate',
    component: LogementCreate,
    meta: { requiresAuth: true } // Guard pour propriétaires
  },
  {
    path: '/logements/:id/edit',
    name: 'LogementUpdate',
    component: LogementUpdate,
    meta: { requiresAuth: true }
  },
  {
    path: '/reservations',
    name: 'ReservationList',
    component: ReservationList,
    meta: { requiresAuth: true } // Guard pour utilisateurs connectés
  },

  {
    path: '/listreservations',
    name: 'Listreservation',
    component: ListReservation,
    meta: { requiresAuth: true } // Guard pour utilisateurs connectés
  },

  {
    path: '/reservations/:id',
    name: 'ViewReservation',
    component: ViewReservation,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/reservations/:id/edit',
    name: 'UpdateReservation',
    component: UpdateReservation,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/demande-logement',
    name: 'DemandeLogement',
    component: DemandeLogement,
  },
];

// Création de l'instance du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// **Guard de navigation global**
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Vérification du token
  const userRole = localStorage.getItem('role'); // Supposons que le rôle est stocké après connexion

  // Si la route requiert une authentification et que l'utilisateur n'est pas connecté
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    Swal.fire({
      icon: 'warning',
      title: 'Accès refusé',
      text: 'Vous devez être connecté pour accéder à cette page.',
      timer: 2000,
      showConfirmButton: false
    }).then(() => {
      next({ name: 'Login' });
    });
  } 
  // Vérification du rôle pour certaines routes
  else if (to.matched.some(record => record.meta.role && record.meta.role !== userRole)) {
    Swal.fire({
      icon: 'error',
      title: 'Accès interdit',
      text: 'Vous n\'avez pas les droits nécessaires pour accéder à cette page.',
    }).then(() => {
      next({ name: 'Portail' });
    });
  } 
  else {
    next(); // Continue si tout est OK
  }
});

export default router;
