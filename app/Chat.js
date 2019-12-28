class Chat {
    constructor(io) {
        this.io = io;
    }

    listen() {
        this.io.on("connection", (socket) => {
            socket.on("send message", (sentMessage) => {
                sentMessage = formatMessage(sentMessage);
                this.io.sockets.emit("update messages", sentMessage);
            });
        });
    }
}

function formatMessage(message) {
    return "[ " + getCurrentDate() + " ]: " + message;
}

function getCurrentDate() {
    let currentDate = new Date();
    let day = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate();
    let month = ((currentDate.getMonth() + 1) < 10 ? '0' : '') + (currentDate.getMonth() + 1);
    let year = currentDate.getFullYear();
    let hour = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
    let minute = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
    let second = (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();

    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

module.exports.Chat = Chat;
