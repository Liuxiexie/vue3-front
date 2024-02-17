import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from '@/router/index.js'
import { useREM } from '@/utils/flexible'
import useLibs from '@/libs/index.js'
import store from '@/store/index.js'
import useTheme from '@/utils/theme.js'
// 注册 svg-icons
import 'virtual:svg-icons-register'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(useLibs)
useREM()
useTheme()
app.mount('#app')
