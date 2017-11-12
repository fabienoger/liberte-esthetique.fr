module.exports = {
    head: {
        title: 'Liberté Esthetique',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'Liberté Esthetique', content: 'Liberté Esthetique website' }
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
        vendor: ['iview']
    },
    css: [
      '@/assets/css/main.scss'
    ],
    plugins: [
      { src: '~/plugins/iview', ssr: true }
    ]
}
