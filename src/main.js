import Vue from 'vue'
import App from './App'

/*import store from './store/index'*/
import router from './router'
import './common/css/reset.css'
import './filter'
import './common/css/style.scss'
import './globalFun'
/*import VueAxios from 'vue-axios'*/
import {Button,Input} from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Input)
Vue.use(Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/*
new Vue({
  router,
  /!* store,*!/
  render: h => h(App),
}).$mount('#app')
*/
