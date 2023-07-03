<template>
  <div id="app" class="main-page">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router.js';
import Navigation from '@/components/Navigation/Navigation.vue';
import ProjectItem from '@/components/ProjectItem/ProjectItem.vue';
import TaskItem from '@/components/TaskItem/TaskItem.vue';
import PlugPage from '@/components/PlugPage/PlugPage.vue';
import UserProfile from '@/views/UserProfile.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    UserProfile,
    ProjectItem,
    TaskItem,
    PlugPage,
  },
  router,
};
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
