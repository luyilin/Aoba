import Vue from 'vue'
import App from './App.vue'
import content from './content'

class Aoba {
  constructor(i) {
    this.content = Object.assign({}, content, i)
  }

  start(el) {
    return new Vue({
      el,
      render: h => h(App, { props: { opts: this.content } })
    })
  }
}

export default function aoba(content) {
  return new Aoba(content)
}

if (process.env.NODE_ENV === 'development') {
  window.Aoba = aoba
}

window.AOBA_VERSION = process.env.AOBA_VERSION
