import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io';

import Chat from './components/Chat.vue'

Vue.use(new VueSocketIO({
    debug: true,
    connection: '/',
}));

Vue.component('chat', Chat);

new Vue({
    el: '#app',
    render: h => h(App),
});
