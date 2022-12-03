<template>
  <div id="app">
    <LoginComp/>
  </div>
</template>

<script>
import LoginComp from './components/LoginComp.vue'
import "bootstrap"

export default {
  name: 'App',
  components: {
    LoginComp
  }
}
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css"; 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
