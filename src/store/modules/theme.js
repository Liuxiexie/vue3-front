import { THEME_LIGHT } from '@/constants/index.js'
export default {
  namespaced: true,
  state: () => ({
    themeType: THEME_LIGHT
  }),
  mutations: {
    changeThemeType(state, newThemeType) {
      state.themeType = newThemeType
      console.log(state.themeType)
    }
  }
}
