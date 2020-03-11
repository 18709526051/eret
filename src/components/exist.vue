<template>
  <div id="exist">
    <div>{{msg}}</div>
    <button @click="exist">点击</button>
  </div>
</template>

<script>
export default {
  name: 'existTemp',
  data: function () {
    return {msg: '欢迎下次光临'}
  },
  methods: {
    exist: function () {
		console.log(this.$router)
		console.log(this.$route)
      console.log(345)
    }
  }
}
</script>

<style>
  #exist{
    width: 100%;
    height: 100%;
  }
  #exist div{
    position: absolute;
    width: 200px;
    height: 100px;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -50px;
    border:  solid 1px #cccccc;
  }
</style>
