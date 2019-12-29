import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io';

Vue.use(new VueSocketIO({
    debug: true,
    connection: '/',
}));

new Vue({
    el: '#app',
    render: h => h(App),
});
