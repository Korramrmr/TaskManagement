<template>
    <div class="project-item" @click="handleItemClick">
      <div class="project-item__container">
        <p class="project-item__title">{{ titleProject }}</p>
        <div class="project-item__info">
          <div class="project-item__about">
            <p class="project-item__id">#{{ projectID }} </p>
            <p class="project-item__create">{{ createInfo }}</p>
          </div>
          <div class="project-item__edit">
            <p class="project-item__editor">{{ editorInfo }}</p>
          </div>
        </div>
      </div>
      <button class="project-item__btn btn__icon_dots" @click="toggleDropdown" :class="{ 'project-btn-active': dropdownVisible }">
        <svg-icon :iconClass="'menu-dots'" :className="'menu-dots'" />
    </button>
      <div class="project-item__drop btn-drop" :hidden="!dropdownVisible">
        <a class="btn-drop-link">Редактировать</a>
        <a class="btn-drop-link link-red">Удалить</a>
      </div>
    </div>
  </template>
  
  <script>
  import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
  export default {
    components: {
      SvgIcon
    },
    props: {
      titleProject: {
        type: String,
        required: true
      },
      projectID: {
        type: Number,
        required: true,
        default: 1
      },
      createInfo: {
        type: String,
        default: 'Иванов И.И. создал 1 час назад'
      },
      editorInfo: {
        type: String,
        default: 'Баранов В.В. изменил 1 минуту назад'
      }
    },
    data() {
      return {
        dropdownVisible: false
      };
    },
    mounted() {
      document.addEventListener('click', this.handleDocumentClick);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleDocumentClick);
    },
    methods: {
      handleItemClick() {
      },
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
      },
      handleDocumentClick(event) {
        const isOutside = !event.target.closest('.project-item');
        if (isOutside) {
          this.dropdownVisible = false;
        }
      }
    }
  };
  </script>
  
  <style lang="scss">
  @import './ProjectItem.scss';
  </style>
  