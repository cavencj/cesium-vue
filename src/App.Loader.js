/*
 * @Author: Caven
 * @Date: 2019-06-14 13:20:27
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-14 13:28:16
 */
import Vue from 'vue'
import Cesium from 'cesium/Cesium'
import 'cesium/Widgets/widgets.css'
const hub = new Vue()
class AppLoader {
  constructor() {
    Vue.config.productionTip = false
    Vue.use({
      install(Vue) {
        Vue.prototype.$hub = hub
      }
    })
  }
  install() {
    global.Vue = Vue
    global.Cesium = Cesium
    return Promise.all([import('@/components')])
  }
}

const appLoader = new AppLoader()
export default appLoader
