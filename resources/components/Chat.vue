<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div id="history" class="mt-4 bg-light rounded p-3">
                    <p v-for="historyMessage in historyMessages">{{ historyMessage }}</p>
                </div>
                <form id="chat" class="mt-4" v-on:submit.prevent="onSubmit">
                    <div class="form-row justify-content-between ml-0 mr-0">
                        <input type="text" class="bg-light rounded col-8 form-control" v-model="message"/>
                        <input type="submit" class="rounded col-3 text-white font-weight-bold border-0" value="Send!"/>
                    </div>
                </form>
            </div>
        </div>
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
            },
        }
    }
</script>

<style scoped>
    form input[type='text'] {
        border: 2px solid #eb5424;
    }

    form input[type='submit'] {
        background: #eb5424;
        border: none;
    }

    #history {
        height: 550px;
    }

</style>