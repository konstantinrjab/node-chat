var socket = io.connect();

var app = new Vue({
    el: '#app',
    data() {
        return {
            message: '',
            historyMessages: [],
        };
    },
    methods: {
        onSubmit: function () {
            socket.emit("send message", this.message);
            this.message = '';
        },
        updateHistory: function (message) {
            this.historyMessages.push(message);
        }
    }
});

socket.on("update messages", function (message) {
    app.updateHistory(message);
});