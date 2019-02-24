<template>
    <div class="signup-register">
        <div class="wrap">
            <div class="choice">
                <div class="signup-button" @click="showSignup" v-bind:class="{active: status === 'signup'}" >登录</div>
                <div class="register-button" @click="showRegister" v-bind:class="{active: status === 'register'}">注册</div>
            </div>
            <div class="line"></div>
            <div class="signup-content" v-if="status === 'signup'">
                <span class="line-content">
                    <p>用户名</p>
                    <el-input v-model="username" placeholder="请输入用户名"></el-input>
                </span>
                <span class="line-content">
                    <p>密码</p>
                    <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
                </span>
                <el-button type="submit" @click="SignUp">登录</el-button>
            </div>
            <div class="register-content" v-if="status === 'register'">
                <span class="line-content">
                    <p>用户名</p>
                    <el-input v-model="username" placeholder="请输入用户名"></el-input>
                </span>
                <span class="line-content">
                    <p>密码</p>
                    <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
                </span>
                <span class="line-content">
                    <p>确认密码</p>
                    <el-input v-model="confirmPassword" placeholder="请再次输入密码" type="password"></el-input>
                </span>
                <span class="line-content">
                    <p>邮箱</p>
                    <el-input v-model="email" placeholder="请输入邮箱"></el-input>
                </span>
                <el-button type="submit" @click="Register">注册</el-button>
            </div>
        </div>
    </div>

</template>

<script>
     import AV from '../lib/initLeanCloud'
      export default {
        name : 'signupandregister',
        data () {
          return {
            status : 'signup',
            username : '',
            password : '',
            email : '',
            confirmPassword : ''
          }
        },
        methods : {
          showSignup () {
            this.status = 'signup'
          },
          showRegister () {
            this.status = 'register'
          },
          Register () {
                const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;
                if( this.username.length <= 6 || this.username.length >= 16 ){
                  alert('请输入6-16个单位长度的用户名')
                }else if(this.password.length <= 11){
                  alert('请输入大于11个单位长度的密码')
                }else if(!(this.password === this.confirmPassword)){
                  alert('两次输入密码不相同')
                }else if(!reg.test(this.email)){
                  alert('请输入正确的邮箱')
                }else{
                  // LeanCloud - 注册
                  // https://leancloud.cn/docs/leanstorage_guide-js.html#注册
                  let user = new AV.User();
                  let username = this.username;
                  let password = this.password;
                  let email = this.email;
                  let that = this;
                  user.setUsername(username);
                  user.setPassword(password);
                  user.setEmail(email);
                  user.signUp().then(function (loginedUser) {
                    //创建用户数据，并将此时页面的数据覆盖上
                    console.log('注册成功');
                    let userInfomation = {
                      profile: [{name: '',age: '',status: '',job: '' }],
                      prize: [{prizeName: '',prizeContent: ''}],
                      workExperience: [{company: '',workContent: ''}],
                      project: [{projectName: '',projectContent: ''}],
                      contact: [{phone: '',QQnumber: '',wechat: ''}]
                    };
                    loginedUser.set('infomation', userInfomation);
                    console.log('创建数据成功');
                    loginedUser.save();
                    console.log('保存数据成功');
                    //渲染数据
                    that.$store.commit('load',loginedUser.get('infomation'));
                    //跳转至主页面
                    let href = window.location.href;
                    let h1 = href.substring(0,href.length-19);
                    window.location.href = h1;
                  }, (function (error) {
                    alert(JSON.stringify(error));
                  }));
                }
          },
          SignUp () {
            // LeanCloud - 登录
            // https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
            let username = this.username;
            let password = this.password;
            let that = this;
            AV.User.logIn(username,password).then(function (loginedUser) {
              alert('登录成功');
              // 登录成功，将简历数据渲染成用户数据
              console.log(loginedUser.get('infomation'));
              that.$store.commit('load',loginedUser.get('infomation'));
              //跳转至主页
              let href = window.location.href;
              let h1 = href.substring(0,href.length-19);
              window.location.href = h1
            }, function (error) {
              alert(JSON.stringify(error));
            });
          }
        },
        computed : {
          // status () {
          //
          // }
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
            width: 600px;
            height: 440px;
            background-color: #fff;
            border-radius: 5px;
            border: 1px solid #c1c1c1;
            .choice{
                height: 60px;
                display: flex;
                text-align: center;
                .signup-button{
                    width: 50vw;
                    line-height: 60px;
                    font-size: 32px;
                    border-right:  1px solid #c1c1c1;
                    cursor: pointer;
                    color: #5b5b5b;
                    background-color: #ececec;
                }
                .register-button{
                    width: 50vw;
                    line-height: 60px;
                    font-size: 32px;
                    cursor: pointer;
                    color: #5b5b5b;
                    background-color: #ececec;
                }
                .active{
                    color: #409EFF;
                    background-color: #fff;
                }
            }
            .signup-content{
                .line-content{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 8px 16px;
                    p{
                        width: 80px;
                        text-align: right;
                        margin-right: 16px;
                    }
                }
            }
            .register-content{
                .line-content{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 8px 16px;
                    p{
                        width: 80px;
                        text-align: right;
                        margin-right: 16px;
                    }
                }
            }

            .line{
                background-color: #c1c1c1;
                height: 1px;
                width: 584px;
                margin: 0 8px;
            }
        }
    }
</style>