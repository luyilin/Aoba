<template>
  <div class="container">
    <div class="sidebar">
      <div class="avatar-wrap">
        <img :src="opts.basicInfo.avatar">
        <h1>{{ opts.basicInfo.name }}的简历</h1>
      </div>
      <!--<p v-for="i in opts.personalProject">{{ i.name }} </p>-->
    </div>
    <div class="main"></div>
  </div>
</template>

<script>
  export default {
    props: ['opts']
  }

</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .container {
    position: relative;
    display: flex;
    width: 1060px;
    min-height: 50px;
    margin: 20px auto;
    box-shadow: 0 0 2px 0 rgba(0,0,0, .15),
    0 4px 4px -1px rgba(0,0,0, .18);
    border-radius: 3px;
  }

  .sidebar {
    width: 30%;
    background-color: #8d9cd2;
    color: #fff;
    .avatar-wrap {
      margin: 35px auto;
      text-align: center;
      img {
        display: block;
        width: 150px;
        margin: 20px auto;
        border-radius: 10px;
      }
      h1 {
        font-size: 28px;
        font-weight: 400;
      }
    }
  }
</style>
