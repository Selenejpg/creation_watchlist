<template>
  <div id="app">
    <HeaderComp/>
    <LoginComp/>
  </div>
</template>

<script>
import LoginComp from './components/LoginComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import "bootstrap"

export default {
  name: 'App',
  components: {
    HeaderComp,
    LoginComp
  }
}
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css"; 
@import './sass/login';
@import './sass/navbar';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

</style>
