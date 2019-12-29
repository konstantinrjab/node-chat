export default class VideoStream {
    constructor(io) {
        this.io = io;
    }

    start() {
        this.io.on("connection", (socket) => {
            socket.on("videoStream", (data) => {
                this.io.sockets.emit("videoStream", data);
            });
        });
    }
}