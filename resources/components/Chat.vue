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
        sockets: {
            updateMessages(data) {
                this.updateHistory(data);
            },
        },
        methods: {
            onSubmit: function () {
                this.$socket.emit("sendMessage", this.message);
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