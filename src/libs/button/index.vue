<script>
import { computed } from 'vue'
const EMITS_CLICK = 'click'
// 1. 构建 type 风格可选项和 size 风格可选项
// type 可选项: 表示按钮风格
const typeEnum = {
  primary: 'text-white bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-800',
  main: 'text-white bg-main hover:bg-hover-main active:bg-main',
  info: 'text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200'
}
// size: 可选项: 表示按钮大小. 区分文字按钮和icon按钮
const sizeEnum = {
  // 文字大小
  default: {
    button: 'w-8 h-4 text-base',
    icon: ''
  },
  // icon 按钮
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5'
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: ''
  },
  'icon-small': {
    button: 'w-3 h-3',
    icon: 'w-1.5 h-1.5'
  },
}
</script>

<script setup>
/**
 * 1. 构建 type 风格可选项和 size 风格可选项
 * 2. 通过 props 让开发者选择风格
 * 3. 区分 icon button 和 text icon
 * 4. 根据数据渲染视图
 * 5. 完成点击事件
 */

// 2. 通过 props 让开发者选择风格
const props = defineProps({
  // icon 图标
  icon: String,
  // icon 颜色
  iconColor: String,
  // icon 类名 (tailwind)
  iconClass: String,
  // 类型风格
  type: {
    type: String,
    default: 'primary',
    // 验证type参数
    validator: (val) => {
      // 获取 type风格key值
      const keys = Object.keys(typeEnum)
      // 传递的type值是否包含在keys中
      const result = keys.includes(val)
      if (!result) {
        throw new Error(`你的 type 值必须为 ${keys.join(',')}中的一个`)
      }
      return result
    }
  },
  // 大小风格
  size: {
    type: String,
    default: 'default',
    validator: (val) => {
      const keys = Object.keys(sizeEnum).filter(key => !key.includes('icon'))
      const result = keys.includes(val)
      if (!result) {
        throw new Error(`你的 type值必须为 ${keys.join(',')}中的一个`)
      }
      return result
    }
  },
  // 点击按钮时是否需要动画
  isActiveAnim: {
    type: Boolean,
    default: true
  },
  // 加载
  loading: {
    type: Boolean,
    default: false
  },
})

// 3. 区分 icon button 和 text icon
// 根据是否传递了 props.icon 判断使用哪一种 size
const sizeKey = computed(() => {
  return props.icon ? 'icon-' + props.size : props.size
})

// 5. 完成点击事件
const emits = defineEmits([EMITS_CLICK])
const onBtnClick = () => {
  if (props.loading) return
  emits(EMITS_CLICK)
}
</script>

<template>
  <button @click.stop="onBtnClick" class="text-center rounded flex items-center justify-center duration-150"
    :class="[typeEnum[type], sizeEnum[sizeKey].button, { 'active:scale-105': isActiveAnim }]">
    <!-- loading -->
    <m-svg-icon v-if="loading" name="loading" class="w-2 min-h-2 animate-spin mr-1"></m-svg-icon>
    <!-- icon 按钮 -->
    <m-svg-icon v-if="icon" :name="icon" :color="iconColor" :class="sizeEnum[sizeKey].icon"
      :fillClass="iconClass"></m-svg-icon>
    <!-- 文字按钮 -->
    <slot v-else></slot>
  </button>
</template>

<style lang='scss' scoped>
</style>
