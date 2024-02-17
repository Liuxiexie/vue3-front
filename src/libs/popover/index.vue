<script setup>
import { ref } from 'vue'

// 控制弹层显示
const isVisible = ref(false)

// 鼠标移入
const onMouseenter = () => {
  isVisible.value = true
}

// 鼠标移出
const onMouseleave = () => {
  isVisible.value = false
}
</script>

<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <!-- 具名插槽: 触发弹层的视图 -->
    <div >
      <slot name="reference"></slot>
    </div>
    <!-- 匿名插槽: 弹出弹层中展示的内容 -->
    <transition name="slide">
      <div v-show="isVisible" class="absolute p-1 bg-white rounded-md border">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style lang='scss' scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
