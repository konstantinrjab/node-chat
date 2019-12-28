<template>
    <div class="chat">
        <div id="history">
            <p v-for="historyMessage in historyMessages">{{ historyMessage }}</p>
        </div>
        <form id="chat" v-on:submit.prevent="onSubmit">
            <input type="text" v-model="message"/>
            <input type="submit" value="Send!"/>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        data() {
            return {
                message: '',
                historyMessages: [],
            };
        },
        mounted() {
            // this.socket = io.connect();
            //
            // this.socket.on("update messages", function (message) {
            //     app.updateHistory(message);
            // });
        },
        sockets: {
            connect() {
                // Fired when the socket connects.
                this.isConnected = true;
            },
            disconnect() {
                this.isConnected = false;
            },
            // Fired when the server sends something on the "messageChannel" channel.
            messageChannel(data) {
                this.socketMessage = data
            }
        },
        methods: {
            onSubmit: function () {
                this.socket.emit("send message", this.message);
                this.message = '';
            },
            updateHistory: function (message) {
                this.historyMessages.push(message);
            }
        }
    }
</script>

<style scoped>

</style>