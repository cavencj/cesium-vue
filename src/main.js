/*
 * @Author: Caven
 * @Date: 2019-06-14 13:19:21
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-14 13:28:58
 */
import appLoader from './App.Loader'
;(async () => {
  await appLoader.install()
  Promise.all([import('./App.vue')]).then(([{ default: App }]) => {
    new Vue({
      el: '#app',
      render: h => h(App)
    })
  })
})()
