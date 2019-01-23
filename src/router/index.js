import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home';
import Blog from '@/components/blog';
import Embed from '@/components/embed';
import Andriod from '@/components/andriod';
import Web from '@/components/web';
import Backstage from '@/components/backstage';
import Product from '@/components/product';
import Graduate from '@/components/graduate';
import Case from '@/components/case';
import News from '@/components/news'
import Personal_blog from '@/components/personal_blog'
import Blog_more from "@/components/blog_more";
import NewAll from '@/components/newAll';
import CaseAll from '@/components/caseAll'
import JoinUs from '@/components/joinus'


Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            redirect: 'home',
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/embed',
            name: 'embed',
            component: Embed
        },
        {
            path: '/andriod',
            name: 'andriod',
            component: Andriod
        },
        {
            path: '/web',
            name: 'web',
            component: Web
        },
        {
            path: '/backstage',
            name: 'backstage',
            component: Backstage
        },
        {
            path: '/product',
            name: 'product',
            component: Product
        },
        {
            path: '/graduate',
            name: 'graduate',
            component: Graduate
        },
        {
            path: '/case',
            name: 'case',
            component: Case
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/personal_blog',
            name: 'personal_blog',
            component: Personal_blog
        },
        {
            path: '/blog_more',
            name: 'blog_more',
            component: Blog_more
        },
        {
            path: '/newAll',
            name: 'newAll',
            component: NewAll
        },
        {
            path: '/caseAll',
            name: 'caseAll',
            component: CaseAll
        },
        {
            path: '/joinus',
            name: 'joinus',
            component: JoinUs
        }
    ],
    scrollBehavior(to, from, savePosition) {
        return {
            x: 0,
            y: 0
        }
    }
})