import Main from '@/views/Main.vue';


// 不作为Main组件的子页面展示的页面单独写，如下

export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') },

    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [

    {
        path: '/access',
        icon: 'social-buffer',
        name: 'order',
        title: '订单管理',
        access: 2,
        component: Main,
        children: [
            {
                path: 'order-add',
                icon: 'compose',
                name: 'order-add',
                title: '发订单',
                access: 33,
                component: () => import('@/views/access/order-add/order-add.vue')
            },
            {
                path: 'ser-order-add',
                icon: 'compose',
                name: 'ser-order-add',
                title: '服务商发订单',
                access: 51,
                component: () => import('@/views/access/order-add/order-add.vue')
            },
            {
                path: 'ser-order-man',
                icon: 'compose',
                name: 'ser-order-man',
                title: '服务商订单管理',
                access: 52,
                component: () => import('@/views/access/order-management/order-management.vue')
            },
            {
                path: 'ser-pre-order',
                icon: 'compose',
                name: 'ser-pre-order',
                title: '服务商草稿箱',
                access: 53,
                component: () => import('@/views/access/preorder-management/preorder-management.vue')
            },
            {
                path: 'wy-order-add',
                icon: 'compose',
                name: 'wy-order-add',
                title: '无央发订单',
                access: 54,
                component: () => import('@/views/access/order-add/order-add.vue')
            },
            {
                path: 'wy-order-man',
                icon: 'compose',
                name: 'wy-order-man',
                title: '无央订单管理',
                access: 55,
                component: () => import('@/views/access/order-management/order-management.vue')
            },
            {
                path: 'wy-pre-order-man',
                icon: 'compose',
                name: 'wy-pre-order-man',
                title: '无央草稿箱',
                access: 56,
                component: () => import('@/views/access/preorder-management/preorder-management.vue')
            },
            {
                path: 'pro-order-man',
                icon: 'compose',
                name: 'pro-order-man',
                title: '省订单管理',
                access: 57,
                component: () => import('@/views/access/order-management/order-management.vue')
            },
            {
                path: 'x-order-man',
                icon: 'compose',
                name: 'x-order-man',
                title: '县订单管理',
                access: 58,
                component: () => import('@/views/access/order-management/order-management.vue')
            },
            {
                path: 'par-order-man',
                icon: 'compose',
                name: 'par-order-man',
                title: '合作社订单管理',
                access: 59,
                component: () => import('@/views/access/order-management/order-management.vue')
            },
            {
                path: 'ses-order-man',
                icon: 'compose',
                name: 'ses-order-man',
                title: '系统管理员订单管理',
                access: 60,
                component: () => import('@/views/access/order-management/order-management.vue')
            },
           

            {
                path: 'preorder-management',
                icon: 'compose',
                name: 'preorder-management',
                title: '预订单草稿箱',
                access: 34,
                component: () => import('@/views/access/preorder-management/preorder-management.vue')
            },
            {
                path: 'order-management',
                icon: 'compose',
                name: 'order-management',
                title: '订单管理',
                access: 35,
                component: () => import('@/views/access/order-management/order-management.vue')
            },
            {
                path: 'preorder-detail',
                icon: 'compose',
                name: 'preorder-detail',
                title: '订单详情',
                access: 36,
                component: () => import('@/views/access/preorder-detail/preorder-detail.vue')
            },
            {
                path: 'order-distribution',
                icon: 'compose',
                name: 'order-distribution',
                title: '分单',
                access: 37,
                component: () => import('@/views/access/order-distribution/order-distribution.vue')
            }
        ]
    },
    {
        path: '/access',
        icon: 'social-buffer',
        name: 'coo',
        title: '合作社管理',
        access: 3,
        component: Main,
        children: [

            {
                path: 'coo-basic',
                icon: 'home',
                name: 'coo-basic',
                title: '合作社基本信息',
                access: 46,
                component: () => import('@/views/access/coo-basic/coo-basic.vue')
            },
            {
                path: 'coo-land',
                icon: 'home',
                name: 'coo-land',
                title: '合作社土地信息',
                access: 47,
                component: () => import('@/views/access/coo-land/coo-land.vue')
            },

            {
                path: 'coo-pro',
                icon: 'grid',
                name: 'coo-pro',
                title: '生产要素',
                access: 28,
                component: () => import('@/views/access/coo-pro/coo-pro.vue')
            },
            {
                path: 'coo-agri',
                icon: 'man',
                name: 'coo-agri',
                title: '农机管理',
                access: 29,
                component: () => import('@/views/access/coo-agri/coo-agri.vue')
            },

            {
                path: 'coo-car',
                icon: 'man',
                name: 'coo-car',
                title: '车辆管理',
                access: 45,
                component: () => import('@/views/access/coo-car/coo-car.vue')
            },


            {
                path: 'area',
                icon: 'spoon',
                name: 'area',
                title: '地块管理',
                access: 30,
                component: () => import('@/views/access/area/area.vue')
            },
            {
                path: 'yield',
                icon: 'fork',
                name: 'yield',
                title: '亩产量管理',
                access: 31,
                component: () => import('@/views/access/yield/yield.vue')
            },
            {
                path: 'farm',
                icon: 'ios-rose',
                name: 'farm',
                title: '农场管理',
                access: 32,
                component: () => import('@/views/access/farm-table/farm-table.vue')
            },


        ]
    },
    {
        path: '/access',
        icon: 'social-buffer',
        name: 'qqq',
        title: '小程序管理',
        access: 4,
        component: Main,
        children: [
            {
                path: 'poverty-alleviation',
                icon: 'home',
                name: 'poverty-alleviation',
                title: '扶贫政策管理',
                access: 48,
                component: () => import('@/views/access/poverty-alleviation/poverty-alleviation.vue')
            },
            {
                path: 'get-rich',
                icon: 'home',
                name: 'get-rich',
                title: '致富政策管理',
                access: 49,
                component: () => import('@/views/access/get-rich/get-rich.vue')
            },
            {
                path: 'whitepaper',
                icon: 'home',
                name: 'whitepaper',
                access: 50,
                title: '白皮书',
                component: () => import('@/views/access/whitepaper/whitepaper.vue')
            },
        ]
    },
    {
        path: '/access',
        icon: 'social-buffer',
        name: 'access',
        title: '系统管理',
        access: 1,
        component: Main,
        children: [
            {
                path: 'role-editor',
                icon: 'compose',
                name: 'role-editor',
                title: '角色管理',
                access: 8,
                component: () => import('@/views/access/role-editor/role-editor.vue')
            },
            {
                path: 'user-editor',
                icon: 'person',
                name: 'user-editor',
                title: '用户管理',
                access: 10,
                component: () => import('@/views/access/user-editor/user-editor.vue'),
            },
            {
                path: 'wxuser-manage',
                icon: 'heart',
                name: 'user-manage',
                title: '微信用户管理',
                access: 11,
                component: () => import('@/views/access/wxuser-manage/wxuser-manage.vue'),
            },
            {
                path: 'retail-manage',
                icon: 'person-stalker',
                name: 'retail-manage',
                title: '散户信息管理',
                access: 27,
                component: () => import('@/views/access/retail-manage/retail-manage.vue'),
            },
            {
                path: 'department-editor',
                icon: 'compose',
                name: 'department-editor',
                title: '部门管理',
                access: 21,
                component: () => import('@/views/access/department-editor/department-editor.vue'),
            },
            {
                path: 'Command-centre',
                icon: 'ios-pricetag',
                name: 'Command-centre',
                title: '指挥中心管理',
                access: 16,
                component: () => import('@/views/access/Command-centre/Command-centre.vue')
            },
            {
                path: 'reg-examine',
                icon: 'checkmark',
                name: 'reg-examine',
                title: '注册审核',
                access: 19,
                component: () => import('@/views/access/reg-examine/reg-examine.vue'),
            },
            {
                path: 'authority-editor',
                icon: 'power',
                name: 'authority-editor',
                title: '资源管理',
                access: 9,
                component: () => import('@/views/access/authority-editor/authority-editor.vue')
            },

            {
                path: 'service-editor',
                icon: 'person-stalker',
                name: 'service-editor',
                title: '服务商管理',
                access: 14,
                component: () => import('@/views/access/service-editor/service-editor.vue')
            },
            {
                path: 'history',
                icon: 'pizza',
                name: 'history',
                title: '土地历史经营人关系管理',
                access: 23,
                component: () => import('@/views/access/history/history.vue')
            },
            {
                path: 'logistics-manage',
                icon: 'compose',
                name: 'logistics-manage',
                title: '物流管理',
                access: 15,
                component: () => import('@/views/access/logistics-manage/logistics-manage.vue'),
            },

            {
                path: 'Administrative',
                icon: 'flash',
                name: 'Administrative',
                title: '行政区管理',
                access: 22,
                component: () => import('@/views/access/Administrative/Administrative.vue')
            },
            {
                path: 'dryingtower',
                icon: 'flag',
                name: 'dryingtower',
                title: '烘干塔管理',
                access: 20,
                component: () => import('@/views/access/dryingtower/dryingtower.vue')
            },

            {
                path: 'Bankcard',
                icon: 'gear-a',
                name: 'Bankcard',
                title: '银行卡变更流水',
                access: 25,
                component: () => import('@/views/access/Bankcard/Bankcard.vue')
            },
            {
                path: 'Planting_variety_management',
                icon: 'soup-can',
                name: 'Planting_variety_management',
                title: '种植种类管理',
                access: 18,
                component: () => import('@/views/access/Planting_variety_management/Planting_variety_management.vue')
            },
            {
                path: 'Planting_type_management',
                icon: 'navicon',
                name: 'Planting_type_management',
                title: '种植类型管理',
                access: 17,
                component: () => import('@/views/access/Planting_type_management/Planting_type_management.vue')
            },
            {

                path: 'grain',
                icon: 'funnel',
                name: 'grain',
                access: 13,
                title: '粮库管理',
                component: () => import('@/views/access/Grain-depot/Grain-depot.vue')
            }


        ]
    }
];
// export const link =[
//     {
//         path: '/access',

//         children: [
//             {
//                 path: 'useradd',
//                 component: () => import('@/views/access/user-editor/user-add/user-add.vue')
//             },
//             {
//                 path: 'roleadd', 
//                 component: () => import('@/views/access/role-editor/role-add/add-role.vue')
//             }
//         ]
//     }
// ]
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
