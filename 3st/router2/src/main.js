import Vue from 'vue'
import router from './router'

const app = new Vue({
  data:{
    currentRoute: window.location.pathname
  },
  computed:{
    ViewComponet(){
      return router[this.currentRoute];
    }
  },
  render(h){return h (this.ViewComponet)},
}).$mount('#app')

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
