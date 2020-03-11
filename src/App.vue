<template>
  <div id="app">
    <!-- <router-link to="/login" replace="replace">login</router-link>
    <router-link to="/exist" replace="replace">exist</router-link> -->
    <button @click="Mylogin">longin</button>
    <button @click="Myexist">exist</button>
    <div class="routerView">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import login from "./components/login"
import exist from "./components/exist"
import route from "vue-router"
import router from "./router/app"

export default {
  name: 'App',
  methods:{
    Mylogin: function(){
      console.log("login")
      this.$router.push("/login?age=23&name=hll");
    },
    Myexist: function(){
       console.log("exist")
      this.$router.push("/exist");
    }
  },
  router,
  /* comments:{
    exist,
    login,
  } */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.routerView{
  width: 500px;
  height: 300px;
  border: solid 2px red;
}
.router-link-active{
  color: red;
}
</style>
