<template>
    <div class="preview">
        <div class="preview-aside">
            <div class="portrait"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538636410624&di=72517540bcddec3ced1a16fdf17b3f5a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F060828381f30e9248aec4f0e4f086e061d95f741.jpg">
            </div>
            <div class="information">
                <h3>个人信息</h3>
                <p>年龄:{{information.profile[0].age}}</p>
                <p>学历:{{information.profile[0].status}}</p>
            </div>
            <div class="concat">
                <h3>联系方式</h3>
                <p>电话:{{information.contact[0].phone}}</p>
                <p>QQ:{{information.contact[0].QQnumber}}</p>
                <p>微信: {{information.contact[0].wechat}}</p>
            </div>
            <div class="prize">
                <h3>获奖情况</h3>
                <p v-for="prize in filter(information.prize)">
                    {{prize.prizeName}}
                </p>
            </div>
        </div>
        <div class="preview-content">
            <div class="name-job">
                <h1>{{information.profile[0].name || '---'}}</h1>
                <h4>应聘职位:{{information.profile[0].job || '---'}}</h4>
            </div>
            <div class="project">
                <h3>项目经验</h3>
                <hr>
                <div class="project-content" v-for="project in filter(information.project)">
                    <b>项目名称:{{project.projectName}}</b>
                    <p>项目内容:{{project.projectContent}}</p>
                </div>
            </div>
            <div class="work-experice">
                <h3>工作经历</h3>
                <hr>
                <div class="work-experience" v-for="work in filter(information.workExperience)">
                    <b>工作公司:{{work.company}}</b>
                    <p>工作内容:{{work.workContent}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
      export default {
        name: 'preview',
        methods:{
          add () {
            this.$store.commit('increment')
          },
          filter (array) {
            return array.filter(item => this.isEmpty(item))
          },
          isEmpty (object) {
            let empty = false
            for (let key in object) {
              if (object[key].length > 0) {
                empty = true
                break
              }
            }
            return empty
          }
        },
        computed: {
          information () {
            return this.$store.state.information
          }
        }
      }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.preview{
    display: flex;

    .preview-aside{
        width: 300px;
        background-color: #1e2735;
        color: #fff;
        text-align: left;
        padding-left: 16px;
        .portrait{
            color: #fff;
            width: 180px;
            height: 180px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 32px;
            overflow: hidden;
            border-radius: 50%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .preview-content{
        flex: 1;
        padding: 16px;
        text-align: left;
            border-radius: 50%;
        .name-job{
        }
    }
}
</style>