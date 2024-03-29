import { createStore } from 'vuex'
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'
import createPersistedState from 'vuex-persistedstate'
const store = createStore({
  getters,
  modules: {
    category,
    theme
  },
  plugins: [
    createPersistedState({
      // 指定保存到 localStorage 中的key
      key: 'vue-front',
      // 需要保存的模块
      paths: ['category', 'theme']
    })
  ]
})

export default store
