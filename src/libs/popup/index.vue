<script setup>
import { useScrollLock, useVModel } from '@vueuse/core';
import { watch } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean
  }
})
defineEmits(['update:modelValue'])
// 这是一个响应式数据, 当 isVisible 发生变化时, 自动触发 emit 修改 modelValue
const isVisible = useVModel(props)
const isLocked = useScrollLock(document.body)
watch(isVisible, (val) => {
  isLocked.value = val
})
</script>

<template>
  <div>
    <teleport to='body'>
      <!-- 蒙板 -->
      <transition name="fade">
        <div v-if="isVisible" @click="isVisible = false" class="w-screen h-screen bg-zinc-900/80 z-30 fixed top-0 left-0">
        </div>
      </transition>
      <!-- 弹出层 -->
      <transition name="popup-down-up">
        <div v-if="isVisible" v-bind="$attrs" class="w-screen bg-white z-50 fixed bottom-0">
          <slot></slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style lang='scss' scoped>
// fade 动画
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

// 准备进入, 离开完成
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
