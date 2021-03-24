import Vue from 'vue'
import router from './router'
import Lnb from "@/components/Lnb";

//Lnb 컴포넌트 전역으로 등록
Vue.component('Lnb',Lnb)

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
