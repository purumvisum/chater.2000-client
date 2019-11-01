import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueSocketIO from 'vue-socket.io'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'https://chater2000.herokuapp.com/'
}));

new Vue({
    router,
    vuetify,
    render: h => h(App)

}).$mount('#app');

