<template>
    <div class="editor">
        <div class="item" v-for="(ele,idx) in elements">
            <!--绑定元素-->
            <div class="list" v-for="(list,index) in ele" >
                {{State.title[index]}}:
                <el-input placeholder="请输入内容" :value="list"
                          @input="(value) => {changeField([State.path,idx,index],value)}"></el-input>
            </div>
            <div class="remove-list" @click="removeElements(State.path,idx)" v-if="State.add">x</div>
        </div>
        <el-button type="danger" round v-if="State.add" @click="addElements(State.path)">添加一项</el-button>
    </div>
</template>

<script>
  export default {
    name : 'editor',
    props: ['elements','State'],
    data () {
      return {

      }
    },
    methods: {
      changeField (path,value) {
        this.$store.commit('elementChange',{path,value})
        console.log(value)
      },
      addElements (path) {
        const empty = {};
        Object.keys(this.State.title).map(e => empty[e] = '')
        this.$store.commit('addList',{path:path,value:empty})
      },
      removeElements (path,index) {
        this.$store.commit('removeList',{path,index})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.editor{
    padding:8px;
    .item{
        position: relative;
        padding: 8px 0 0 0;
        margin: 16px 0;
        .list{
        text-align: left;
        margin: 0 0 8px 0;
            .el-input{
                width:90%;
                display: block;
                margin: 8px auto;
            }
        }
        .remove-list{
            background-color: #f1f1f1;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            text-align: center;
            line-height: 24px;
            cursor: pointer;
            position: absolute;
            right: 8px;
            top: 0;
        }
        .remove-list:hover{
            background-color: #c0c4cc;
        }
    }
}
</style>