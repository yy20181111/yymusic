import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(localtion) {
  return originalPush.call(this, localtion).catch(err => err)
}


const routes = [{
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/discover',
    component: () => import('../views/discover/discover'),
    children: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: () => import('../views/discover/child/recommend/recommend'),
    }, {
      path: '/rank',
      component: () => import('../views/discover/child/rank/rank'),
    },{
      path: '/songlist',
      component: () => import('../views/discover/child/songlist/songlist'),
    },{
      path: '/anchor',
      component: () => import('../views/discover/child/anchor/anchor'),
    },{
      path: '/singerr',
      component: () => import('../views/discover/child/singer/singerr'),
    },{
      path: '/newdisc',
      component: () => import('../views/discover/child/newdisc/newdisc'),
    },
  ]
  }, {
    path: '/mymusic',
    component: () => import('../views/mymusic/mymusic'),
  }, {
    path: '/mymusic',
    component: () => import('../views/mymusic/mymusic'),
  }, {
    path: '/friend',
    component: () => import('../views/friend/friend'),
  }, {
    path: '/shop',
    component: () => import('../views/shop/shop'),
  }, {
    path: '/singer',
    component: () => import('../views/singer/singer'),
  },{
    path: '/download',
    component: () => import('../views/download/download'),
  }
]

const router = new VueRouter({
  routes
})

export default router