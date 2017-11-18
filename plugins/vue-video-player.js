import Vue from 'vue'

if (process.browser) {
  const VueVideoPlayer = require('vue-video-player/ssr')
  Vue.use(VueVideoPlayer)
}
require('video.js/dist/video-js.css')
