<template>
  <div>
    <loading v-if="loading" />
    <div class="container" v-if="!loading">
      <div class="sidebar">
        <div class="avatar-wrap">
          <img :src="basicInfo.avatar">
          <h1>{{ basicInfo.name + $inter.get('resume') }}</h1>
          <p class="desc" v-if="basicInfo.desc">{{ basicInfo.desc }}</p>
        </div>
        <div class="side-li">
          <i class="iconfont icon-tag"></i>
          <div>
            <h2>{{ $inter.get('contactTitle') }}</h2>
            <ul>
              <li>
                <i class="iconfont icon-tel"></i>
                <span>{{ $inter.get('contact.tel') }}：{{ contact.tel }}</span>
              </li>
              <li>
                <i class="iconfont icon-email"></i>
                <span>
                  {{ $inter.get('contact.email') }}：
                  <a :href="'mailto:' + contact.email" target="_blank">{{ contact.email }}</a>
                </span>
              </li>
              <li>
                <i class="iconfont icon-wechat1"></i>
                <span>{{ $inter.get('contact.wechat') }}：{{ contact.wechat }}</span>
              </li>
              <li>
                <i class="iconfont icon-QQ"></i>
                <span>QQ：{{ contact.qq }}</span>
              </li>
              <li v-if="contact.telegram">
                <i class="iconfont icon-telegram1"></i>
                <span>Telegram：<a :href="'https://t.me/' + contact.telegram" target="_blank">{{ contact.telegram }}</a></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="side-li">
          <i class="iconfont icon-tag"></i>
          <div>
            <h2>{{ $inter.get('application') }}</h2>
            <span>{{ data.application }}</span>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="part">
          <h2>
            <i class="iconfont icon-Workordercenter-fi-copy"></i>
            {{ $inter.get('basicInfoTitle') }}
          </h2>
          <ul class="info">
            <li><span>{{ $inter.get('basicInfo.name') }}：</span>{{ basicInfo.name }} / {{ basicInfo.gender }}</li>
            <li><span>{{ $inter.get('basicInfo.school') }}：</span>{{ basicInfo.school }}</li>
            <li><span>{{ $inter.get('basicInfo.major') }}：</span>{{ basicInfo.major }}</li>
            <li><span>{{ $inter.get('basicInfo.blog') }}：</span><a :href="basicInfo.blog" target="_blank">{{ basicInfo.blog }}</a></li>
            <li><span>Github：</span><a :href="basicInfo.github" target="_blank">{{ basicInfo.github }}</a></li>
          </ul>
        </div>
        <div class="part">
          <h2>
            <i class="iconfont icon-project"></i>
            {{ $inter.get('workExperience') }}
          </h2>
          <div class="company" v-for="i in data.workExperience">
            <h3>
              <img :src="i.companyLogo">
              {{i.companyName}}（{{ i.startDate }} - {{ i.endDate === '' || i.endDate === 'present' ? $inter.get('present') : i.endDate }}）
            </h3>
            <div class="project" v-for="j in i.project">
              <h4>
                {{ j.name }}
                <a v-if="j.sourceCode" :href="j.sourceCode" target="_blank">{{ $inter.get('sourceCode') }}</a>
                <a v-if="j.demo" :href="j.demo" target="_blank">Demo</a>
              </h4>
              <p v-html="j.description"></p>
              <img v-if="j.previewImage" :src="j.previewImage">
            </div>
          </div>
          <div class="person-project">
            <h3>{{ $inter.get('personalProject') }}</h3>
            <div class="project" v-for="i in data.personalProject">
              <h4>
                {{ i.name }}
                <a v-if="i.sourceCode" :href="i.sourceCode" target="_blank">{{ $inter.get('sourceCode') }}</a>
                <a v-if="i.demo" :href="i.demo" target="_blank">Demo</a>
              </h4>
              <p v-html="i.description"></p>
              <img v-if="i.previewImage" :src="i.previewImage">
            </div>
          </div>
        </div>
        <div class="part">
          <h2>
            <i class="iconfont icon-icskill"></i>
            {{ $inter.get('skill') }}
          </h2>
          <ul class="project" v-for="i in data.skills">
            <li>
              <h4>{{ i.name }}</h4>
              <p v-for="j in i.description" v-html="j"></p>
              <p class="abandon" v-for="j in i.abandoned">{{ j }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import fetch from 'unfetch'
  import Loading from './loading.vue'
  import jsYaml from 'js-yaml'
  import Color from 'color'

  export default {
    props: ['opts'],

    computed: {
      basicInfo: function () {
        return this.data.basicInfo
      },
      contact: function () {
        return this.data.contact
      }
    },

    async created() {
      var content
      if (this.opts.indexFile.split('.')[1].indexOf('yaml') > -1 ) {
        content = await fetch(`${this.opts.path}${this.opts.indexFile}`).then(res => res.text())
        content = jsYaml.load(content)
      } else {
        content = await fetch(`${this.opts.path}${this.opts.indexFile}`).then(res => res.json())
      }
      this.data = Object.assign({}, this.opts, content)
      let themeColor = this.opts.color
      if (themeColor) {
        document.documentElement.style.setProperty('--theme', themeColor)
        document.documentElement.style.setProperty('--link', Color(themeColor).darken(0.2))
        document.documentElement.style.setProperty('--title', Color(themeColor).darken(0.15))
      }
      await this.$nextTick()
      this.loading = false
    },

    data() {
      return {
        data: this.opts,
        loading: true
      }
    },

    components: {
      Loading
    }
  }

</script>

<style lang="scss">
  @import "../assets/iconfont.css";

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --theme: #8d9cd2;
    --link: #a178d8;
    --title: #4d61a9;
    --dark: #24292e;
    --font: #555;
    --selection-bg: var(--theme);
    --selection-fg: white;
  }

  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }

  body {
    font-family: PingFang SC,Lantinghei SC,-apple-system,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
    -webkit-font-smoothing: antialiased;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #fff;
  }

  .main a {
    color: var(--link)
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
    overflow: hidden;
  }

  .sidebar {
    width: 29%;
    background-color: var(--theme);
    color: #fff;
    padding: 15px;
    .avatar-wrap {
      margin: 25px auto 40px;
      text-align: center;
      img {
        display: block;
        width: 150px;
        margin: 15px auto;
        border-radius: 10px;
      }
      h1 {
        font-size: 26px;
        font-weight: 400;
      }
      .desc {
        font-size: 14px;
        margin-top: 5px;
      }
    }
    .side-li {
      display: flex;
      margin-bottom: 20px;
      h2 {
        line-height: 1.8;
        font-size: 18px;
        font-weight: inherit;
      }
      li {
        font-size: 14px;
        line-height: 1.5;
        i {
          margin-right: 3px;
        }
      }
      .icon-tag {
        font-size: 24px;
        margin-right: 5px;
      }
    }
  }

  .main {
    flex: 1;
    padding: 15px;
    color: var(--font);
    .part {
      margin: 15px auto;
      h2 {
        color: var(--theme);
        border-bottom: 1px solid var(--theme);
        font-weight: inherit;
        line-height: 1.5;
        margin: 12px auto;
        display: flex;
        align-items: center;
        .iconfont {
          font-size: 24px;
          margin-right: 7px;
        }
        .icon-project {
          font-size: 26px;
        }
      }
      .info {
        margin-left: 30px;
        li {
          line-height: 2;
          span {
            color: var(--dark);
          }
        }
      }
      .company {
        h3 {
          display: flex;
          align-items: center;
          margin: 5px 0;
          img {
            height: 50px;
            margin-right: 10px;
          }
        }
      }
      h3 {
        font-size: 20px;
        color: var(--title);
      }
      .person-project {
        h3 {
          line-height: 2;
          margin-bottom: 10px;
        }
      }
      .project {
        border-left: 2px solid var(--theme);
        margin: 0 0 15px 5px;
        padding-left: 20px;
        position: relative;
        &:before {
          content: '';
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: var(--theme);
          position: absolute;
          top: 0;
          left: -9px;
        }
        h4 {
          color: var(--dark);
          font-size: 18px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          a {
            font-size: 12px;
            border: 1px solid;
            border-radius: 5px;
            padding: 2px 3px;
            margin-left: 15px;
          }
        }
        p {
          line-height: 1.5;
          margin-bottom: 5px;
        }
        img {
          max-height: 200px;
        }
        .abandon {
          text-decoration: line-through;
        }
      }
    }
  }
</style>
