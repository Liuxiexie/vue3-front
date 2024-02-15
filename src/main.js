import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from '@/router/index.js'
import { useREM } from '@/utils/flexible'
import useLibs from '@/libs/index.js'

// 注册 svg-icons
import 'virtual:svg-icons-register'
const app = createApp(App)
app.use(router)
app.use(useLibs)
useREM()
app.mount('#app')
