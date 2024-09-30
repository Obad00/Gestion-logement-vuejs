import { createRouter, createWebHistory } from 'vue-router';
import CategoriesView from '../views/CategoriesView.vue';
import CommentairesView from '../views/CommentairesView.vue';
import LogementsView from '../views/LogementsView.vue';
import NotificationsView from '../views/NotificationsView.vue';
import PaymentsView from '../views/PaymentsView.vue';
import ReservationsView from '../views/ReservationsView.vue';
import UsersView from '../views/UsersView.vue';
import SupportsView from '../views/SupportsView.vue';
import Portail from '@/views/Accueil/Portail.vue';
import Apropos from '@/views/Accueil/Apropos.vue';
import Contact from '@/views/Accueil/Contact.vue';
import Logements from '@/views/Accueil/Logements.vue';

const routes = [
  { path: '/', name: 'Portail', component : Portail },
  { path: '/apropos', name: 'Apropos', component : Apropos },
  { path: '/contact', name: 'Contact', component : Contact },
  { path: '/logements', name: 'Logements', component : Logements },

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
