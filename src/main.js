import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

// Vue.config.productionTip = false
let data = {
  items: mock,
  comments: {},
  addedName: '',
  addedComment: '',
  today: '',
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
