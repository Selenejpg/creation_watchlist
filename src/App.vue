<template>
  <div id="app">
    <HeaderComp/>
    <LoginComp/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import LoginComp from './components/LoginComp.vue'
import FooterComp from './components/FooterComp.vue'
import "bootstrap"

export default {
  name: 'App',
  components: {
    HeaderComp,
    LoginComp,
    FooterComp
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
