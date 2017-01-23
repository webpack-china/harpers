import Vue from 'vue';
import Hello from './components/hello.vue';

console.log(Hello);

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  components: {
    hello: Hello
  }
})
