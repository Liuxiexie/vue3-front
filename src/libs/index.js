import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // 1. 获取当前路径之下的所有 index.vue
    const components = import.meta.glob('./*/index.vue')
    // 2. 遍历获取到的组件模块
    for (const [fullPath, fn] of Object.entries(components)) {
      // 获取组件名称
      const componentName = 'm-' + fullPath.replace('./', '').split('/')[0]
      // 取得异步组件
      const component = defineAsyncComponent(fn)
      app.component(componentName, component)
    }
    // 3. 使用 app.component 注册组件
  }
}
