import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(localtion) {
  return originalPush.call(this, localtion).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login/login'),
  },{
    path: '/register',
    component: () => import('../views/register/register'),
  },
  {
    path: '/home',
    component: () => import('../views/home/home'),
    children: [
      {
        path: '/',
        redirect: 'system'
      },
      {
        path: 'system',
        component: () => import('../views/system/system'),
        children: [{
          path: '/',
          redirect: 'user'
        },
        {
          path: 'user',
          component: () => import('../views/system/child/user/user'),
        }, {
          path: 'organization',
          component: () => import('../views/system/child/organization/organization'),
        }, {
          path: 'application',
          component: () => import('../views/system/child/application/application'),
        }, {
          path: 'app-user',
          component: () => import('../views/system/child/app-user/app-user'),
        }, {
          path: 'authority',
          component: () => import('../views/system/child/authority/authority'),
        },
        {
          path: 'role',
          component: () => import('../views/system/child/role/role'),
        },
        ]
      }, {
        path: 'overview',
        component: () => import('../views/overview/overview'),
      }, {
        path: 'search',
        component: () => import('../views/search/search'),
      }, {
        path: 'safeguard',
        component: () => import('../views/safeguard/safeguard'),
      }, {
        path: 'table',
        component: () => import('../views/table/table'),
      }, {
        path: 'video',
        component: () => import('../views/video/video'),
      }, {
        path: 'warn',
        component: () => import('../views/warn/warn'),
      }, {
        path: 'basicinfor',
        component: () => import('../views/basicinfor/basicinfor'),
      }
    ]
  },


]
const router = new VueRouter({
  routes,
})

export default router