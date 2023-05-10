import MainC from '@/pages/MainC'
import ArticleP from '@/pages/ArticleP'

import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainC
    },

    {
      path: '/articles/:id',
      component: ArticleP
    },

    // ИМПОРТИРУЙ КОМПОНЕНТ!!!!!!!!!!!!!!!!!!!!
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
