/*
 * @Author: Caven
 * @Date: 2019-06-14 13:21:32
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-14 13:21:52
 */
const componentsWatcher = scaner => {
  scaner.keys().map(key => {
    let name = scaner(key).default.name
    if (name) {
      Vue.component(name, function(resolve) {
        require([key + ''], resolve)
      })
    }
  })
}
const vueScaner = require.context('@/components', true, /^\.\/((?!\/)[\s\S])+\/index\.vue$/)
componentsWatcher(vueScaner)
