<template>
    <div id="container">
        <Asides id="asides"/>
        <Preview id="preview"/>
    </div>

</template>

<script>
  import Asides from './asides'
  import Preview from './preview'
  export default {
    name: 'home',
    components: {
      Asides,
      Preview
    }
  }


</script>