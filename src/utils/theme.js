import { watch } from 'vue'
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants/index.js'
import store from '@/store/index.js'

// 监听系统主题
let matchMedia
const watchSystemThemeChange = () => {
  if (matchMedia) return
  matchMedia = window.matchMedia
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  // 监听主题变化
  matchMedia.onchange = () => {
    changeTheme(THEME_SYSTEM)
  }
}

const changeTheme = (theme) => {
  let htmlClassName = ''
  switch (theme) {
    case THEME_LIGHT:
      htmlClassName = 'light'
      break
    case THEME_DARK:
      htmlClassName = 'dark'
      break
    case THEME_SYSTEM:
      // 监听系统主题变化
      watchSystemThemeChange()
      htmlClassName = matchMedia.matches ? 'dark' : 'light'
      break
  }
  document.querySelector('html').className = htmlClassName
}

export default () => {
  watch(() => store.getters.themeType, changeTheme, {
    immediate: true
  })
}
