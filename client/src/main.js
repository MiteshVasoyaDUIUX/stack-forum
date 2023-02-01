/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import 'bootswatch/dist/cosmo/bootstrap.css';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
