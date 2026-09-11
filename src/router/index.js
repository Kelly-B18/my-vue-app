import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/about.vue'
import Admissions from '@/views/Admissions.vue'
import Academics from '@/views/Academics.vue'
import CampusLife from '@/views/CampusLife.vue'

const router = createRouter({

history:createWebHistory(),

routes:[
{
path: '/',
name: 'home',
component: Home
},
{
path: '/about',
name: 'about',
component: About
},
{
path: '/admissions',
name: 'admissions',
component: Admissions
},
{
path: '/academics',
name: 'academics',
component: Academics
},
{
path: '/campus life',
name: 'campus life',
component: CampusLife
}

]

})

export default router