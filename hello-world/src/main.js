import Vue from 'vue'
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import objectPath from 'object-path'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 123,
    information:{
      profile: [{name: '',age: '',status: '' }],
      prize: [{prizeName: '',prizeContent: ''}],
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
          profile: [{name: '',age: '',status: '' }],
          prize: [{prizeName: '',prizeContent: ''}],
          workExperience: [{company: '',workContent: ''}],
          project: [{projectName: '',projectContent: ''}],
          contact: [{phone: '',QQnumber: '',wechat: ''}]
        }
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')