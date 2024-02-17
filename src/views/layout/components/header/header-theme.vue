<script setup>
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants/index.js'
const themeArr = [
  {
    id: '0',
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '极简白'
  },
  {
    id: '1',
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '极简黑'
  },
  {
    id: '2',
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统'
  },
]
</script>

<template>
  <div>
    <m-popover placement="bottom-left">
      <!-- 具名插槽: 触发弹层的视图 -->
      <template #reference>
        <m-svg-icon name="theme-light"
          class="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60"></m-svg-icon>
      </template>
      <!-- 匿名插槽: 弹出弹层中展示的内容 -->
      <div class="w-[140px] overflow-hidden">
        <div v-for="item in themeArr" :key="item.id"
          class="flex items-center cursor-pointer p-1 rounded hover:bg-zinc-100/60">
          <m-svg-icon :name="item.icon" class="w-1.5 h-1.5 mr-1" fillClass="bg-zinc-900"></m-svg-icon>
          <span class="text-sm">{{ item.name }}</span>
        </div>
      </div>
    </m-popover>
  </div>
</template>

<style lang='scss' scoped>
</style>
