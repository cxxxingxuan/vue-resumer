import Vue from 'vue';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import objectPath from 'object-path';
import VueRouter from 'vue-router'
import SignupAnRegister from './components/signupandregister'
import Home from './components/home'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 123,
    information:{
      profile: [{name: '',age: '',status: '',job: ''  }],
      prize: [{prizeName: ''}],
      workExperience: [{company: '',workContent: ''}],
      project: [{projectName: '',projectContent: ''}],
      contact: [{phone: '',QQnumber: '',wechat: ''}]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    elementChange (state,payload) {
      objectPath.set(state.information,payload.path,payload.value);
    },
    addList (state,payload) {
      state.information[payload.path].push(payload.value);
    },
    removeList (state,payload) {
      if ( state.information[payload.path].length === 1) {
        alert('只剩一项了哦')
      }else{
        state.information[payload.path].splice(payload.index,1);
      }
    },
    clear (state) {
        state.information = {
          profile: [{name: '',age: '',status: '',job: '' }],
          prize: [{prizeName: '',prizeContent: ''}],
          workExperience: [{company: '',workContent: ''}],
          project: [{projectName: '',projectContent: ''}],
          contact: [{phone: '',QQnumber: '',wechat: ''}]
        }
    }
  }
});
//router部分
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/signupandregister', component: SignupAnRegister },
  { path: '/home', component: Home }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');