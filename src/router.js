import Vue from 'vue';
import VueRouter from 'vue-router';
import ProjectsPage from '@/views/ProjectsPage.vue';
import TaskPage from '@/views/TaskPage.vue';
import UserProfile from '@/views/UserProfile.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/projects', component: ProjectsPage },
  { path: '/tasks', component: TaskPage },  
  { path: '/profile', component: UserProfile }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
