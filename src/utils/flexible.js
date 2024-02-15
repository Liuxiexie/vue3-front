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
