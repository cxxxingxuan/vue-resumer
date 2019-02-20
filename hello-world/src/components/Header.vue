<template>
  <div class="header">
      <div class="head-left">
          <div class="logo">
              <img src="../assets/logo.png">
          </div>
          <router-link to="/signupandregister">请登录</router-link>
          <router-link to="/home">用户名</router-link>
      </div>
      <div class="infomation">
          <el-button type="danger" round @click="clear">清空</el-button>
          <el-button type="danger" round @click="showPreview">预览</el-button>
      </div>
  </div>
</template>


<script>
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
