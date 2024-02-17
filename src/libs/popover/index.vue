<script>
import { nextTick, ref, watch } from 'vue'

// 指定所有生成位置的常量
// 左上
const PROP_TOP_LEFT = 'top-left'
// 右上
const PROP_TOP_RIGHT = 'top-right'
// 左下
const PROP_BOTTOM_LEFT = 'bottom-left'
// 右下
const PROP_BOTTOM_RIGHT = 'bottom-right'

// 生成 enum
const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT
]
</script>

<script setup>
/**
 * 1. 指定所有生成位置的常量, 并生成 enum
 * 2. 通过 prop 指定生成位置
 * 3. 获取元素的 DOM, 创建读取元素尺寸的方法
 * 4. 生成气泡的样式对象, 用来指定气泡的位置
 * 5. 根据 prop, 计算样式对象
 */

// 通过 props 指定生成的位置
const props = defineProps({
  // 传入气泡框的位置, 不正确的值需要错误反馈
  placement: {
    type: String,
    default: PROP_TOP_LEFT,
    validator: function (val) {
      const result = placementEnum.includes(val)
      if (!result) {
        throw new Error(`气泡框的位置必须是 ${placementEnum.join(',')} 中的一个!`)
      }
      return result
    }
  }
})

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

// 获取元素的 DOM, 创建读取元素尺寸的方法
const referenceTarget = ref() // 触发弹层的视图 dom
const contentTarget = ref() // 展示内容的 dom
const useElementSize = (target) => {
  if (!target) return {}
  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
}

// 指定气泡位置的样式对象
const contentStyle = ref({
  top: 0,
  left: 0
})

// 在气泡框显示的时候, 才进行计算
watch(isVisible, (val) => {
  if (!isVisible) return
  nextTick(() => {
    // 根据传入的 prop 计算位置
    switch (props.placement) {
      // 左上
      case PROP_TOP_LEFT:
        contentStyle.value.top = 0
        contentStyle.value.left = - useElementSize(contentTarget.value).width + 'px'
        break
      // 右上
      case PROP_TOP_RIGHT:
        contentStyle.value.top = 0
        contentStyle.value.left = useElementSize(referenceTarget.value).width + 'px'
        break
      // 左下
      case PROP_BOTTOM_LEFT:
        contentStyle.value.top = useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left = - useElementSize(contentTarget.value).width + 'px'
        break
      // 右下
      case PROP_BOTTOM_RIGHT:
        contentStyle.value.top = useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left = useElementSize(referenceTarget.value).width + 'px'
        break
    }
    console.log(contentStyle.value);
  })
})
</script>

<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <!-- 具名插槽: 触发弹层的视图 -->
    <div ref="referenceTarget">
      <slot name="reference"></slot>
    </div>
    <!-- 匿名插槽: 弹出弹层中展示的内容 -->
    <transition name="slide">
      <div ref="contentTarget" v-show="isVisible" :style="contentStyle" class="absolute p-1 bg-white rounded-md border">
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
