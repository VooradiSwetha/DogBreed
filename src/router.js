import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage'
import BreedImages from './components/BreedImages'
import SubBreeds from './components/SubBreeds'
import Error from './components/Error'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'HomePage',
            component: HomePage
        },
        {
            path: '/BreedImages/:BreedName',
            name: 'BreedImages',
            component: BreedImages,
            props: true
        },
        {
            path:'/SubBreed/:Search',
            name:'SubBreeds',
            component: SubBreeds,
            props: true
        },
        {
            path:'/Error/:erorMsg',
            name:'Error',
            component: Error,
            props: true
        },
        {
            path:'*',
            name:'Error',
            component: Error,
            props: true
        }
        
    ]
}) 