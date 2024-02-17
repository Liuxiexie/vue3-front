import { ALL_CATEGORY_ITEM, CATEGORY_NOMART_DATA } from '@/constants/index.js'
import { getCategory } from '@/api/category.js'
/**
 * navigationBar 中的数据
 */
export default {
  namespaced: true,
  state: () => {
    return {
      categorys: CATEGORY_NOMART_DATA
    }
  },
  mutations: {
    // 设置 categorys 的值
    setCategorys(state, newCategorys) {
      state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
      console.log(state.categorys)
    }
  },
  actions: {
    // 获取 categorys 的值, 并保存到 categorys 中
    async useCategoryData(context) {
      const { categorys } = await getCategory()
      context.commit('setCategorys', categorys)
    }
  }
}
