<script setup>
import { ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core'
defineProps({
  data: {
    type: Array,
    required: true
  }
})

// 当前选中的 item 下标
const currentItemIndex = ref(0)

// 滑块的动态style, 需要改变这两个值实现滑块效果
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '50px'
})

// 获取所有 item 元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})

// ul 元素
const ulTarget = ref()
// 通过 vueuse 的 useScroll 获取响应式的 scroll 滑动距离
const { x: ulScrollLeft } = useScroll(ulTarget)
// 监听 currentItemIndex 的变化, 修改 滑块style 样式
watch(currentItemIndex, (val) => {
  // 获取 当前选中 item 的 width 和 left 值 (getBoundingClientRect() 获取元素的位置和大小信息 )
  const { left, width } = itemRefs[currentItemIndex.value].getBoundingClientRect()
  sliderStyle.value = {
    // 滑块移动的距离 = ul 滑动的距离 x + 当前点击的 item 项距离左侧的值 left
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  }
})

// item 点击事件
const onItemClick = (index) => {
  currentItemIndex.value = index
}
</script>

<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul ref="ulTarget" class="relative flex overflow-x-auto p-1 text-xs text-zinc-600">
      <!-- 滑块 -->
      <li :style="sliderStyle" ref="sliderTarget" class="absolute bg-black h-[22px] rounded-lg duration-200"></li>
      <!-- 汉堡按钮 -->
      <li class="fixed top-0 right-[-1px] h-4 p-1 flex items-center bg-white z-20 shadow-l-white">
        <m-svg-icon name="hamburger" class="w-1.5 h-1.5"></m-svg-icon>
      </li>
      <li :class="{
        'text-zinc-100': currentItemIndex === index
      }" @click="onItemClick(index)" :ref="setItemRef" v-for="(item, index) in data" :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
</style>
