import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoggedIn from '../views/LoggedIn.vue';
import Admin from '../views/Admin.vue';
import store from '../store/index';

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
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter(to, from, next){
      if(store.getters.isLoggedIn){
        next();
      } else{
        console.log(store.getters.isLoggedIn);
        next('/');
      }
    }
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
