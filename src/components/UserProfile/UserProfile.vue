<template>
    <div class="profile">
        <div class="profile-image">
            <img src="@/assets/images/avatar.png" alt="Аватар пользователя" />
        </div>
        <div class="profile-info">
            <div class="profile-info__top">
                <h1 class="info-top__name">Котов Семен Васильевич</h1>
                <button class="project-item__btn btn__icon_dots setting-btn" @click="toggleDropdown"
                    :class="{ 'project-btn-active': dropdownVisible }">
                    <svg-icon :iconClass="'menu-dots'" :className="'menu-dots'" />
                </button>
            </div>
            <div class="profile-info__about">
                <div>О себе:</div>
                <p class="about-text">{{ aboutText }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        aboutText: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss">
@import './UserProfile.scss';
@import '@/components/ProjectItem/ProjectItem.scss';
</style>