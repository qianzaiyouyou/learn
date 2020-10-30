//配置路由相关的信息

import VueRouter from "vue-router";
import Vue from "Vue";

// import Home from '../components/Home';
// import About from '../components/about';
// import User from '../components/user';

const Home = () => import('../components/Home');
//const About = () => import('../components/about');
const User = () => import('../components/user');

const New = () => import('../components/news');
const Messages = () => import('../components/message');
const Profile = () => import("../components/profile");

//1.通过vue.use(插件)，安装插件
Vue.use(VueRouter);

//2.创建VueRouter对象
const routes = [
    {//设置默认打开(即一开始显示的界面)的内容组件
        path: "",
        //redirect重定向:路由的默认路径
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            // {
            //     path: "",
            //     redirect: "news"
            // },
            {
              path: "news",
              component: New
            },
            {
              path: "message",
              component: Messages
            }
        ]
    },
    {
        path: "/about",
        //component: About
        component: () => import('../components/about'),
        meta: {
            title: '关于'
        }
    },
    {
        //配置动态路由
        path: "/user/:id",
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: "/profile",
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]
const router = new VueRouter({
    routes: routes,
    mode: "history",//消除hash值的#号
    //谁处于活跃就用这个class名
    linkActiveClass: "active"
});

//前置守卫(guard)跳转前回调
//修改网页title
router.beforeEach(function (to, from, next){
    //从from跳转到to
    //将网页title改为当前路由的设置的meta.title
    document.title = to.matched[0].meta.title;
    console.log(to);
    console.log("++++");
    //next执行下一步
    next()
})

//后置钩子(hook)跳转后回调
router.afterEach((to,from) => {
    console.log("-----");
})

//3.将我们的router对象传入到Vue实例
export default router;