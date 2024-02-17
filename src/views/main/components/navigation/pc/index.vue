<script setup>
import { ref } from 'vue'

/**
 * 状态切换处理 (控制收起展开)
 */
const isOpenCategory = ref(false)
const triggerState = () => {
  isOpenCategory.value = !isOpenCategory.value
}
/**
 * 选中状态处理
 */
const currentCategoryIndex = ref(0)
const onItemClick = (index) => {
  currentCategoryIndex.value = index
}
</script>

<template>
  <div class="bg-white dark:bg-zinc-800 sticky top-0 left-0 w-full z-10 duration-500">
    <ul :class="[isOpenCategory ? ' h-[206px]' : 'h-[56px]']"
      class="w-[800px] relative flex flex-wrap justify-center overflow-x-auto overflow-hidden duration-200 mx-auto py-1 px-2">
      <!-- 箭头 -->
      <div @click="triggerState"
        class="absolute right-2 bottom-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-900 p-1 z-20 duration-200 cursor-pointer">
        <m-svg-icon :name="isOpenCategory ? 'fold' : 'unfold'" class="w-1.5 h-1.5 "
          fillClass="fill-zinc-900 dark:fill-zinc-300"></m-svg-icon>
      </div>
      <!-- item -->
      <li @click="onItemClick(index)" :class="{
        'text-zinc-900 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-900': currentCategoryIndex === index
      }"
        class="shrink-0 px-1.5 py-0 z-10 duration-200 font-bold text-zinc-900 dark:text-zinc-300 h-4 leading-4 text-base rounded hover:bg-zinc-200 dark:hover:bg-zinc-900 mr-1 mb-1 cursor-pointer"
        v-for="(item, index) in $store.getters.categorys" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
</style>
