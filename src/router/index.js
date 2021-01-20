import Vue from 'vue';
import VueRouter from 'vue-router';

import Todo from '../components/Todo.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Todo, name: 'todo' },
  { path: '/todo/:filter', component: Todo, name: 'todo-filter' },
  { path: '/todo/tag/:tag', component: Todo, name: 'todo-tag' },
  { path: '/about', component: About, name: 'about' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes,
});

export default router;
