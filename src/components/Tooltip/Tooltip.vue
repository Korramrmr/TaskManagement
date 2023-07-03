<template>
    <div class="tooltip">
        <div class="tooltip-content">{{ content }}</div>
    </div>
</template>
  
<script>
export default {
    props: {
        content: {
            type: String,
            required: true
        }
    }
}
</script>

  
<style lang="scss">
@import './Tooltip.scss';
</style>
  