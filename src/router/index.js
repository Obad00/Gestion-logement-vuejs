import { createRouter, createWebHistory } from 'vue-router';
import CategoriesView from '../views/CategoriesView.vue';
import CommentairesView from '../views/CommentairesView.vue';
import LogementsView from '../views/LogementsView.vue';
import NotificationsView from '../views/NotificationsView.vue';
import PaymentsView from '../views/PaymentsView.vue';
import ReservationsView from '../views/ReservationsView.vue';
import UsersView from '../views/UsersView.vue';
import SupportsView from '../views/SupportsView.vue';
import Portail from '@/components/Accueil/Portail.vue';
import Apropos from '@/components/Accueil/Apropos.vue';
import Contact from '@/components/Accueil/Contact.vue';
import Logements from '@/components/Accueil/Logements.vue';
import Register from '@/Auth/UserRegister.vue';
import Login from '@/Auth/LoginRegister.vue';

const routes = [
  { path: '/', name: 'Portail', component : Portail },
  { path: '/apropos', name: 'Apropos', component : Apropos },
  { path: '/contact', name: 'Contact', component : Contact },
  { path: '/logements', name: 'Logements', component : Logements },

  { path: '/register', component: Register },
  { path: '/login', component: Login },

  { path: '/categories', component: CategoriesView },
  { path: '/comments', component: CommentairesView },
  { path: '/logements', component: LogementsView },
  { path: '/notifications', component: NotificationsView },
  { path: '/payments', component: PaymentsView },
  { path: '/reservations', component: ReservationsView },
  { path: '/users', component: UsersView },
  { path: '/supports', component: SupportsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
