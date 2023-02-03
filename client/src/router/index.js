import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoggedIn from '../views/LoggedIn.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/loggedin/token/:token',
    name: 'loggedin',
    component: LoggedIn,
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
