<script setup>
import { computed } from 'vue'
const props = defineProps({
  // icon 图标name
  name: {
    type: String,
    required: true
  },
  // icon 图标颜色
  color: {
    type: String
  },
  // icon 图标的 tailwind css样式
  fillClass: {
    type: String
  }

})

// 得到真正的 icon 图标name (拼接上 #icon-)
const svgIconId = computed(() => `#icon-${props.name}`)
</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="svgIconId" :fill="color" :class="fillClass"></use>
  </svg>
</template>

<style lang='scss' scoped>
</style>
