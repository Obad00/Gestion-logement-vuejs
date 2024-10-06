import { createRouter, createWebHistory } from 'vue-router';

// Importing views
import CategoriesView from '../views/CategoriesView.vue';
import CommentairesView from '../views/CommentairesView.vue';
import LogementsView from '../views/LogementsView.vue';
import NotificationsView from '../views/NotificationsView.vue';
import PaymentsView from '../views/PaymentsView.vue';
import ReservationsView from '../views/ReservationsView.vue';
import UsersView from '../views/UsersView.vue';
import SupportsView from '../views/SupportsView.vue';

// Importing components
import Portail from '@/components/Accueil/PortailAccueil.vue';
import Apropos from '@/components/Accueil/Apropos.vue';
import Contact from '@/components/Accueil/Contact.vue';
import Logements from '@/components/Accueil/Logements.vue';
import Register from '@/Auth/UserRegister.vue';
import Login from '@/Auth/LoginRegister.vue';

// Importing Logement CRUD components
import LogementList from '@/components/LogementList.vue';
import LogementCreate from '@/components/LogementCreate.vue';
import LogementUpdate from '@/components/LogementUpdate.vue';

// Defining routes
const routes = [
  { path: '/', name: 'Portail', component: Portail },
  { path: '/apropos', name: 'Apropos', component: Apropos },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/logements', name: 'Logements', component: Logements },

  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },

  { path: '/categories', name: 'Categories', component: CategoriesView },
  { path: '/comments', name: 'Commentaires', component: CommentairesView },
  { path: '/logements-view', name: 'LogementsView', component: LogementsView },
  { path: '/notifications', name: 'Notifications', component: NotificationsView },
  { path: '/payments', name: 'Payments', component: PaymentsView },
  { path: '/reservations', name: 'Reservations', component: ReservationsView },
  { path: '/users', name: 'Users', component: UsersView },
  { path: '/supports', name: 'Supports', component: SupportsView },

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
  }
  
];

// Creating the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
