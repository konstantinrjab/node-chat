import Vue from 'vue'
import App from './App.vue'

import Chat from './components/Chat.vue'

// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';
//
// export const SocketInstance = socketio('http://localhost:8080');
// Vue.use(VueSocketIO, SocketInstance);

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:8080',
}));

Vue.component('chat', Chat);

new Vue({
    el: '#app',
    render: h => h(App)
});
