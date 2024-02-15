import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '@/utils/flexible.js'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'
// 创建 vue-router 实例
const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes // 根据屏幕宽度来选择进入pc端页面还是移动端页面
})

export default router
