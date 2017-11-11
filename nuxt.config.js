const webpack = require('webpack')

module.exports = {
    head: {
        title: 'Liberté Esthetique',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
            'iview'
        ]
    },
    css: [
        { src: '~assets/css/main.scss', lang: 'scss' },
        'iview/dist/styles/iview.css'
    ]
}
