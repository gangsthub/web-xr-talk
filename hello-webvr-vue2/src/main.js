import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  'a-scene',
  'a-box',
  'a-sphere',
  'a-cylinder',
  'a-plane',
  'a-entity',
  'a-camera',
]

new Vue({
  render: h => h(App)
}).$mount('#app')
