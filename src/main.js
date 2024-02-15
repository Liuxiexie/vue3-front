import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from '@/router/index.js'
import { useREM } from '@/utils/flexible'
const app = createApp(App)
app.use(router)
useREM()
app.mount('#app')
