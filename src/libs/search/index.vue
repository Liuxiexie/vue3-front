<script>
import { ref, watch } from 'vue'
import { useVModel, onClickOutside } from '@vueuse/core';

// 双向绑定数据
const EMIT_MODELVALUE = 'update:modelValue'
// 搜索
const EMIT_SEARCH = 'search'
// 删除所有文本
const EMIT_CLEAR = 'clear'
// 输入事件
const EMIT_INPUT = 'input'
// 获取焦点
const EMIT_FOCUS = 'focus'
// 失去焦点
const EMIT_BLUR = 'blur'
</script>

<script setup>
/**
 * 1. 输入框数据双向绑定
 * 2. 搜索按钮在 hover 时才展示
 * 3. 一键清空文本
 * 4. 触发搜索
 * 5. 控制下拉区的展示
 * 6. 事件处理
 */

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
const emits = defineEmits([EMIT_MODELVALUE, EMIT_SEARCH, EMIT_SEARCH, EMIT_CLEAR, EMIT_INPUT, EMIT_FOCUS, EMIT_BLUR])
const inputValue = useVModel(props)
// 监听用户输入行为
watch(inputValue, (val) => {
  emits(EMIT_INPUT, val)
})
// 一键清空文本
const onClearHandler = () => {
  inputValue.value = ''
  emits(EMIT_CLEAR, '')
}

// 触发搜索
const onSearchHandler = () => {
  emits(EMIT_SEARCH, inputValue.value)
  console.log(inputValue.value);
}
// 控制下拉区的展示, 获取焦点时,下拉框展示
const isFocus = ref(false)
const onFocusHandler = () => {
  isFocus.value = true
  emits(EMIT_FOCUS)
}
// 在点击搜索框之外的地方时, 下拉区不展示
const containerTarget = ref()
onClickOutside(containerTarget, () => {
  isFocus.value = false
})

// 失去焦点
const onBlurHandler = () => {
  emits(EMIT_BLUR)
}
</script>

<template>
  <div ref="containerTarget" class="group relative w-full border-white rounded-xl p-0.5 hover:bg-red-100/50 duration-500">
    <div>
      <!-- 搜索图标 -->
      <m-svg-icon name="search" color='#707070'
        class="w-1.5 max-h-1.5 absolute translate-y-[-50%] top-[50%] left-2"></m-svg-icon>
      <!-- 输入框 -->
      <input type="text" placeholder="搜索" v-model="inputValue" @keyup="onSearchHandler" @blur="onBlurHandler"
        @focus="onFocusHandler"
        class="group-hover:border-zinc-100 group-hover:bg-white duration-500 block bg-zinc-100 text-sm w-full h-[44px] pl-4 rounded-xl outline-0 border-zinc-200 caret-zinc-700 border focus:border-red-300">
      <!-- 删除图标 -->
      <m-svg-icon @click="onClearHandler" v-show="inputValue" name="input-delete"
        class="w-1.5 max-h-1.5 absolute translate-y-[-50%] top-[50%] right-8 cursor-pointer"></m-svg-icon>
      <!-- 分割线 -->
      <div
        class="opacity-0 group-hover:opacity-100 duration-500 min-h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-6 bg-zinc-200">
      </div>
      <!-- 搜索图标 -->
      <m-button @click="onSearchHandler"
        class="opacity-0 group-hover:opacity-100 duration-500 absolute translate-y-[-50%] top-[50%] right-1 rounded-full"
        type="main" icon="search" iconColor="#ffffff"></m-button>
    </div>
    <!-- 下拉区 -->
    <transition name="slide">
      <div v-if="$slots.dropdown" v-show="isFocus"
        class="w-full max-h-[500px] absolute top-[56px] rounded-md left-0 p-2 z-20 text-base duration-500 overflow-auto bg-white border border-zinc-200 hover:drop-shadow-xl">
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<style lang='scss' scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
