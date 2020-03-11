<template>
  <div id="loginOut">
    <button @click="outMsg">123</button>
    <div>
      欢迎使用
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginTemplate',
  data: function () {
    return { msg: '欢迎使用' };
  },
  methods: {
    outMsg: function () {
      console.log(this.$router)
      console.log(this.$route)
      console.log(234)
    }
  }
}
</script>

<style>
  #loginOut{
    width: 100%;
    height: 100%;
  }
  #loginOut div{
    position: absolute;
    width: 200px;
    height: 150px;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -75px;
  }
</style>
