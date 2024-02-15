import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants/index.js'

import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
/**
 * 判断当前屏幕是否为移动设备, 判断依据屏幕宽度是否小于一个指定宽度 (1280)
 */
export const isMobileTerminal = computed(() => {
  // 获取浏览器窗口的宽度 document.documentElement.clientWidth
  return width.value < PC_DEVICE_WIDTH
})

/**
 * 动态设置 rem 基准值
 * 根据用户屏幕的宽度, 计算基准值, 然后把基准值赋值给html
 */
export const useREM = () => {
  // 最大基准值
  const MAX_FONTSIZE = 40
  // 获取 html 元素
  const html = document.querySelector('html')
  // 计算 基准值 取当前屏幕宽度 / 10 作为基准值, 最大不超过 40px
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > MAX_FONTSIZE ? MAX_FONTSIZE : fontSize
  // 赋值
  html.style.fontSize = fontSize + 'px'
}
