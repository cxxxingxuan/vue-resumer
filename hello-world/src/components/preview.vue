<template>
    <div class="preview">
        
    </div>
</template>

<script>
      export default {
        name: 'preview',
        methods:{
          add () {
            this.$store.commit('increment')
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
<style scoped>

</style>