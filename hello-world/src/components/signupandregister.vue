<template>
    <div class="signup-register">
        <div class="wrap">
            <div class="choice">
                <div class="signup-button" @click="showSignup">登录</div>
                <div class="register-button" @click="showRegister">注册</div>
            </div>
            <div class="line"></div>
            <div class="signup-content" v-if="status === 'signup'">
                <p>用户名:</p>
                <el-input v-model="username" placeholder="请输入内容"></el-input>
                <p>密码:</p>
                <el-input v-model="password" placeholder="请输入内容"></el-input>
            </div>
            <div class="register-content" v-if="status === 'register'">
                <p>用户名:</p>
                <el-input v-model="username" placeholder="请输入内容"></el-input>
                <p>密码:</p>
                <el-input v-model="password" placeholder="请输入内容"></el-input>
                <p>邮箱:</p>
                <el-input v-model="email" placeholder="请输入内容"></el-input>
            </div>
        </div>
    </div>

</template>

<script>
  export default {
    name : 'signupandregister',
    data () {
      return {
        status : 'signup',
        username : '',
        password : '',
        email : ''
      }
    },
    methods : {
      showSignup () {
        this.status = 'signup'
      },
      showRegister () {
        this.status = 'register'
      }
    }
  }
</script>

<style lang="scss">
    .signup-register{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        .wrap{
            width: 400px;
            height: 340px;
            background-color: #fff;
            border-radius: 3px;
            border: 1px solid #c1c1c1;
            .choice{
                height: 60px;
                display: flex;
                color: #409eff;
                text-align: center;
                .signup-button{
                    width: 50vw;
                    line-height: 60px;
                    font-size: 32px;
                    border-right:  1px solid #c1c1c1;
                    cursor: pointer;
                }
                .register-button{
                    width: 50vw;
                    line-height: 60px;
                    font-size: 32px;
                    cursor: pointer;
                }
            }
            .line{
                background-color: #c1c1c1;
                height: 1px;
                width: 384px;
                margin: 0 8px;
            }
        }
    }
</style>