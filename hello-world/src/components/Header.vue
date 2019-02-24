<template>
  <div class="header">
      <div class="head-left">
          <div class="logo">
              <img src="../assets/logo.png">
          </div>
          <p>
              您好
              <span v-if="current">{{current.get('username')}}</span>
              <span v-else><router-link to="/signupandregister">请登录</router-link></span>
          </p>
      </div>
      <div class="infomation">
          <el-button type="danger" round @click="showPreview">预览</el-button>
          <el-button type="danger" round @click="signOut" v-if="current">登出</el-button>
          <el-button type="danger" round @click="Save" v-if="current">保存</el-button>
      </div>
  </div>
</template>


<script>
  import AV from '../lib/initLeanCloud'
export default {
  name: 'Header',
  data(){
    return{
      username: 'aaa'
    }
  },
  methods : {
    clear () {
      this.$store.commit('clear')
    },
    showPreview () {
      this.$emit('showPreview')
    },
    signOut () {
      AV.User.logOut();
      alert('成功注销');
      this.$store.commit('clear');
      let href = window.location.href;
      let h1 = href+'signupandregister';
      window.location.href = h1;
    },
    Save () {
      AV.User.current().set('infomation',this.information);
      AV.User.current().save();
      alert('保存成功');
    }
  },
  computed : {
    current () {
      return AV.User.current()
    },
    information () {
      return this.$store.state.information
    },
    created () {
      if(AV.User.current()){
        console.log(1)
      }else{
        let href = window.location.href;
        let h1 = href+'signupandregister';
        window.location.href = h1;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    .head-left{
        display: flex;
        justify-content: center;
        align-items: center;
        .logo{
            width:44px;
            height:44px;
            margin:8px;
            > img{
                width:44px;
                height:44px;
            }
        }
        .username{
            cursor: pointer;
        }
    }
    .infomation{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px;
        .div{
            padding: 8px;
        }
    }
}

</style>
