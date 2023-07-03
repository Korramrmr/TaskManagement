<template>
    <div class="plugPage">
        <div class="plug">
            <p class="plug-text">{{ placeholderText }}</p>
            <button class="plug-btn">Добавить</button>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {        
        placeholderText: {
            type: String,
            required: true,
            default: "Ничего не создано"
        }
    }
};
</script>
  
<style lang="scss">
@import './PlugPage.scss';
</style>
  