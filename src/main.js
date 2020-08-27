import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.less'
import './styles/iconfont.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import MyHeader from './compoents/MyHeader.vue'
Vue.use(Vant)
Vue.config.productionTip = false
Vue.component('MyHeader', MyHeader)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
