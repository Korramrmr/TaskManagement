<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li v-for="link in navbarLinks" :key="link.id" class="navbar__list-button">
        <button class="navbar-btn btn" :class="{ 'active': isActiveLink(link) }" @click="handleNavButtonClick(link)">
          {{ link.label }}
        </button>
      </li>
    </ul>
    <div class="navbar__profile" @click="toggleDropdown" :class="{ 'profile-active': dropdownVisible }"
      ref="navbarProfile">
      <img class="navbar__profile_avatar" :src="profileAvatar" alt="Иконка профиля">
      <button class="navbar__profile_arrow">
        <svg-icon class="user-button__icon" icon-class="arrow-down" :class="{ 'rotate-up': rotateUp }"></svg-icon>
      </button>
    </div>
    <div class="navbar__drop" v-show="dropdownVisible" ref="navbarDrop">
      <router-link to="/profile" class="navbar__link">Профиль</router-link> <a class="navbar__link">Выход</a>
    </div>
  </nav>
</template>

<script>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';


export default {
  data() {
    return {
      profileAvatar: require("@/assets/images/avatar.png"),
      dropdownVisible: false,
      navbarLinks: [
        { id: 1, label: 'Проекты', path: '/projects' },
        { id: 2, label: 'Задачи', path: '/tasks' },
        { id: 3, label: 'Пользователи', path: '/users' }
      ],
      activePath: '',
      rotateUp: false,
    };
  },
  components: {
    SvgIcon
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
      this.rotateUp = !this.rotateUp;
    },
    isActiveLink(link) {
      return link.path === this.activePath;
    },
    handleNavButtonClick(link) {
      if (link.path === this.activePath) {
        return;
      }
      this.activePath = link.path;
      this.$router.push(link.path);
      this.dropdownVisible = false;
    },
    handleDocumentClick(event) {
      const navbarProfile = this.$refs.navbarProfile;
      const navbarDrop = this.$refs.navbarDrop;

      if (
        !event.target.closest('.navbar__profile') &&
        !event.target.closest('.navbar__drop')
      ) {
        this.dropdownVisible = false;
        navbarProfile.classList.remove('profile-active');
      }
    }
  },
  mounted() {
    const profileArrow = this.$refs.navbarProfile.querySelector('.navbar__profile_arrow');

    profileArrow.addEventListener('click', (event) => {
      event.stopPropagation();
      this.toggleDropdown();
    });

    document.addEventListener('click', this.handleDocumentClick);
    this.activePath = this.$route.path;
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleDocumentClick);
  }
};
</script>

<style lang="scss">
@import './Navigation.scss';
</style>
