<template>
  <div class="task-item">
    <div class="task-item__container">
      <div class="task-item__project">
        <p class="task-item__title">{{ titleTask }}</p>
        <img :src="profileAvatar" alt="Аватар" class="task-item__avatar">
      </div>
      <div class="task-item__info">
        <div class="task-item__about">
          <p class="task-item__id">#{{ taskID }}</p>
          <p class="task-item__create">{{ createInfo }}</p>
          <p class="task-item__status" :class="statusClass">{{ statusInfo }}</p>
        </div>
        <p class="task-item__change">{{ changeInfo }}</p>
      </div>
    </div>
    <button class="task-item__btn btn__icon_dots" @click="toggleDropdown" :class="{ 'task-btn-active': dropdownVisible }">
      <svg-icon :iconClass="'menu-dots'" :className="'menu-dots'" width="26px" height="26px" />
    </button>

    <div class="task-item__drop btn-drop" :hidden="!dropdownVisible">
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
    titleTask: {
      type: String,
      required: true,
      default: "Очень длинное название проекта, создано специально для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. Очень длинное название проекта, создано специально для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка.."
    },
    createInfo: {
      type: String,
      required: true,
      default: 'Иванов И.И. создал 1 час назад'
    },
    taskID: {
      type: Number,
      required: true,
      default: 1
    },
    statusInfo: {
      type: String,
      required: true,
      default: 'Статус не указан',
    },
    changeInfo: {
      type: String,
      required: true,
      default: 'Баранов В.В. изменил 1 минуту назад'
    }
  },
  data() {
    return {
      dropdownVisible: false
    };
  },
  computed: {
    truncatedTitle() {
      if (this.titleTask.length > 50) {
        return this.titleTask.slice(0, 50) + '...';
      } else {
        return this.titleTask;
      }
    },
    profileAvatar() {
      return require('@/assets/images/avatar.png');
    },
    statusClass() {
      const statusClassMap = {
        'Черновик': 'status-color-draft',
        'В работе': 'status-color-in-progress',
        'Завершена': 'status-color-completed',
        'Тестирование': 'status-color-testing',
        'Выполнена': 'status-color-executed',
        'Закрыта': 'status-color-closed',
        'Удалена': 'status-color-deleted',
        'Активен': 'status-color-active',
        'Не активен': 'status-color-inactive',
      };

      return statusClassMap[this.statusInfo] || 'default-status-color';
    },
  },
  mounted() {
    this.setFullTextAttribute();
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    setFullTextAttribute() {
      const titles = document.getElementsByClassName("task-item__title");
      for (let i = 0; i < titles.length; i++) {
        const fullText = titles[i].innerText;
        titles[i].setAttribute("data-full-text", fullText);
      }
    },
  },
};
</script>
  
<style lang="scss">
@import './TaskItem.scss';
</style>
  