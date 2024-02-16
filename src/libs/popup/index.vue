<script setup>
import { useScrollLock } from '@vueuse/core';
import { watch } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean
  }
})
const emits = defineEmits(['update:modelValue'])
const isLocked = useScrollLock(document.body)
watch(() => { props.modelValue }, (val) => {
  isLocked.value = val
})
</script>

<template>
  <div>
    <teleport to='body'>
      <!-- 蒙板 -->
      <transition name="fade">
        <div v-if="modelValue" @click="emits('update:modelValue')"
          class="w-screen h-screen bg-zinc-900/80 z-30 fixed top-0 left-0">我是蒙蔽
        </div>
      </transition>
      <!-- 弹出层 -->
      <transition name="popup-down-up">
        <div v-if="modelValue" v-bind="$attrs" class="w-screen bg-white z-50 fixed bottom-0">我是弹出层</div>
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
