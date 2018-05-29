module.exports = {
  mode: 'spa',
  head: {
    title: 'Liberté Esthétique',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cabinet d\'esthétique à Vincennes. La solution minceur et anti-âge. Une nouvelle méthode amincissant.' },
      { hid: 'keywords', name: 'keywords', content: 'esthétique, solution, minceur, anti-âge, cryolipolyse, LPG-LED, jetpeel' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  env: {
    color: '#3bbca1'
  },
  loading: { color: '#3bbca1' },
  build: {
    vendor: [
      'iview',
      'vue2-leaflet'
    ]
  },
  plugins: [
    { src: '~/plugins/iview.js', ssr: true },
    { src: '~/plugins/vue2-leaflet.js', ssr: false }
  ],
  css: [
    'iview/dist/styles/iview.css',
    '@/assets/css/main.scss',
    '@/assets/css/product.scss'
  ],
  generate: {
    minify: {
      collapseWhitespace: false
    }
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    browserBaseURL: process.env.BASE_URL || 'http://localhost:3000'
  }
}
