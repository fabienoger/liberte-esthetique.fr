import Vue from 'vue'

if (process.browser) {
  const iView = require('iview')
  Vue.use(iView)
}
import 'iview/dist/styles/iview.css'
