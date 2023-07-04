import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import DaftarNamaPresiden from '../components/DaftarNamaPresiden.vue';
import TodoList from '../components/TodoList.vue';
import PendudukNegara from '../components/PendudukNegara.vue';
import LambangNegara from '../components/LambangNegara.vue';

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/daftarnamapresiden', component: DaftarNamaPresiden },
  { path: '/todolist', component: TodoList },
  { path: '/penduduknegara', component: PendudukNegara },
  { path: '/lambangnegara', component: LambangNegara},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;