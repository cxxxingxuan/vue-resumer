<template>
    <div class="choice">
        <ul class="choice-aside">
            <li v-for="i in items" :key="keys.itemsKey[i]" v-on:click="current = i"
            v-bind:class="['choice-button',{active:current===i}]">
                <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                </svg>
            </li>
        </ul>
        <div class="entry">
            <h2 class="title">{{titles[current]}}</h2>
            <Editor :class="{show:current===0}" :elements="infomation.profile"
                    :State="{add : false,path : `profile`,title : {name:'姓名',age:'年龄',status:'学历'}}"/>
            <Editor :class='{show:current===1}' :elements="infomation.prize"
                    :State="{add : true,path : `prize`,title : {prizeName:'获奖名称',prizeContent:'获奖内容'}}"/>
            <Editor :class='{show:current===2}' :elements="infomation.workExperience"
                    :State="{add : true,path : `workExperience`,title : {company:'公司',workContent:'工作内容'}}"/>
            <Editor :class='{show:current===3}' :elements="infomation.project"
                    :State="{add : true,path : `project`,title : {projectName:'项目名称',projectContent:'项目介绍'}}"/>
            <Editor :class='{show:current===4}' :elements="infomation.contact"
                    :State="{add : false,path : `contact`,title : {phone:'电话号码',QQnumber:'QQ',wechat:'微信'}}"/>
        </div>
    </div>
</template>

<script>
  import Editor from './editor'
  export default {
    name: 'asides',
    data(){
      return {
        icons:['credentials_icon','jiangbei','gongwenbao1','xiangmu','dianhua1'],
        items:[0,1,2,3,4],
        current:0,
        keys:{itemsKey:['items0','items1','items2','items3','items4']},
        titles: ['个人信息','获奖信息','工作经历','项目经验','联系方式']
      }
    },
    components: {
      Editor
    },
    computed: {
      infomation () {
        return this.$store.state.information
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul{
    margin:0;
    padding:0;
    li{
        list-style-type: none;
    }
}

.choice{
    display: flex;
    .choice-aside{
        width:70px;
        border-right: 1px solid #dcdcdc;
        height:100%;
        font-size: 32px;
        .choice-button{
            cursor: pointer;
            width: 70px;
            height: 70px;
            font-size: 40px;
            color: #383d44;
            line-height: 70px;
        }
        .choice-button:hover{
            background-color: #383d44;
            color: #f1f1f1;
        }
        .active{
            background-color: #383d44;
            color: #f1f1f1;
        }
    }
    .entry{
        flex:1;
        overflow: auto;
        >div{
            display: none;
        }
        .show{
            display: block;
        }
        .title{
            height: 70px;
            line-height: 70px;
            background-color: #2d3137;
            color: #ffffff;
            margin: 0;
        }
    }
}
.entry{
    
}
</style>