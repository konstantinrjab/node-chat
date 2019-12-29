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
    form {
        margin: 15px 0;
    }
    form input[type='text'] {
        border: 2px solid #eb5424;
        border-radius: 5px;
        padding: 5px;
        width: 75%;
    }
    form input[type='submit'] {
        background: #eb5424;
        border: none;
        border-radius: 5px;
        color: #FFF;
        cursor: pointer;
        font-weight: bold;
        padding: 7px 5px;
        width: 19%;
    }
    #history {
        background: #FFF;
        border: 2px solid #eb5424;
        height: 550px;
    }
</style>