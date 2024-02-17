<script setup>
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants/index.js'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
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

/**
 * 1. 监听主题切换的行为
 * 2. 保存当前需要展示的主题到vuex中
 * 3. 根据主题展示对应的图标
 * 4. 修改 html 中的class
 */
const onItemClick = (theme) => {
  store.commit('theme/changeThemeType', theme.type)
}

const svgIconName = computed(() => {
  const findTheme = themeArr.find(item => item.type === store.getters.themeType)
  return findTheme
})
</script>

<template>
  <div>
    <m-popover placement="bottom-left">
      <!-- 具名插槽: 触发弹层的视图 -->
      <template #reference>
        <m-svg-icon :name="svgIconName.icon" fillClass="fill-zinc-900 dark:fill-zinc-300"
          class="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900"></m-svg-icon>
      </template>
      <!-- 匿名插槽: 弹出弹层中展示的内容 -->
      <div class="w-[140px] overflow-hidden">
        <div v-for="item in themeArr" :key="item.id" @click="onItemClick(item)"
          class="flex items-center cursor-pointer p-1 rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800">
          <m-svg-icon :name="item.icon" class="w-1.5 h-1.5 mr-1"
            fillClass="fill-zinc-900 dark:fill-zinc-300"></m-svg-icon>
          <span class="text-zinc-900  dark:text-zinc-300 text-sm">{{ item.name }}</span>
        </div>
      </div>
    </m-popover>
  </div>
</template>

<style lang='scss' scoped>
</style>
