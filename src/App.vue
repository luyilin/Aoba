<template>
  <div class="container">
    <div class="sidebar">
      <div class="avatar-wrap">
        <img :src="opts.basicInfo.avatar">
        <h1>{{ opts.basicInfo.name }}的简历</h1>
      </div>
      <div class="contact">
        <h2>
          <i class="iconfont icon-tag"></i>
          <span>Contact. 联系方式</span>
        </h2>
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
  @import "assets/iconfont.css";

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
    width: 29%;
    background-color: #8d9cd2;
    color: #fff;
    padding: 15px;
    .avatar-wrap {
      margin: 25px auto;
      text-align: center;
      img {
        display: block;
        width: 150px;
        margin: 20px auto;
        border-radius: 10px;
      }
      h1 {
        font-size: 26px;
        font-weight: 400;
      }
    }
    .contact {
      h2 {
        font-size: 18px;
        line-height: 40px;
        i {
          font-size: 24px;
        }
      }
    }
  }
</style>
