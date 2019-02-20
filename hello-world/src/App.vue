<template>
  <div id="app" :class="{previewStatus:previewStatus===true}">
    <Header id="header"  v-on:showPreview="showPreview"/>
    <!--<div id="container">-->
      <!--<Asides id="asides"/>-->
      <!--<Preview id="preview"/>-->
      <router-view></router-view>
    <!--</div>-->
    <el-button type="danger" round class="sign-up-preview" @click="editPreview">退出预览</el-button>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Asides from './components/asides.vue'
import Preview from './components/preview.vue'

export default {
  name: 'app',
  components: {
    Header,
    Asides,
    Preview
  },
  data () {
    return {
      previewStatus: false
    }
  },
  methods:{
    showPreview () {
      this.previewStatus = true;
    },
    editPreview () {
      this.previewStatus = false;
    }
  },
  created:{

  }
}
</script>

<style lang="scss">
body{
    margin:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ececec;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  .preview-status{
    display: none;
    margin:0 auto;
  }
}
#header{
  height:60px;
  background-color: #383d44;
  color: #c6c6be
}
#container{
  display:flex;
  border: 1px solid;
  flex:1;
  justify-content: space-around;
}
#asides{
  margin:16px;
  width:500px;
  border: 1px solid #dcdcdc;
  overflow: hidden;
  background-color: #ffffff;
}
#preview{
  max-width: 900px;
  border: 1px solid #dcdcdc;
  margin:16px;
  flex: 1;
  background-color: #ffffff;
  border-radius: 8px;
}
.previewStatus{
  #header{
    display: none;
  }
  #asides{
    display: none;
  }
  .sign-up-preview{
    display: block;
    position: fixed;
    right: 32px;
    bottom: 32px;
  }
}
.sign-up-preview{
  display: none;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
