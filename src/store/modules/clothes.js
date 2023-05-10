import axios from 'axios'

export default {
    actions: {
        async fetchPosts(ctx) {
            const response = await axios.get('/articles.json')
            const articles = response.data
            ctx.commit('updateArticles', articles)
        },
    },
    mutations: {
        updateArticles (state, articles) {
            state.articles = articles
        },

    },
    state: {
        articles: [
            
        ],
        colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4'
        ],
    },
    getters: {
        allArticles(state) {
            return state.articles
        },
        articleSlider(state) {
            return state.articles.filter(t => t.slider == true)
        },
        colors(state){
            return state.colors
        },
    },
}