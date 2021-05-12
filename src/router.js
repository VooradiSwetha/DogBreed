import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage'
import BreedImages from './views/BreedImages'
import SubBreed from './components/SubBreed'
import Error from './views/Error'

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
            path:'/SubBreed/:BreedNameForSearch',
            name:'SubBreed',
            component: SubBreed,
            props: true
        },
        {
            path:'/Error/:ErorMsg',
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