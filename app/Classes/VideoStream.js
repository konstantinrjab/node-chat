export default class VideoStream {
    constructor(io) {
        this.io = io;
    }

    start() {
        this.io.on("connection", (socket) => {
            this.io.on("webcamStream", (sentMessage) => {
                this.io.sockets.broadcast.emit("updateMessages", sentMessage);
            });
        });
    }
}