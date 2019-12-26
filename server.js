const app = require('http').createServer(response);
const fs = require('fs');
const io = require('socket.io')(app);

app.listen(8080);
console.log("App running…");

function response(req, res) {
    fs.readFile(__dirname + '/html/index.html',
        function (err, data) {
            let file = '';
            if (req.url === '/') {
                file = __dirname + '/html/index.html';
            } else {
                file = __dirname + req.url;
            }
            fs.readFile(file, function(err, data) {
                if (err) {
                    res.writeHead(404);
                    return res.end('Page or file not found');
                }
                res.writeHead(200);
                res.end(data);
            });
        });
}

io.on("connection", function(socket) {
    socket.on("send message", function(sentMessage, callback) {
        sentMessage = "[ " + getCurrentDate() + " ]: " + sentMessage;
        io.sockets.emit("update messages", sentMessage);
        callback();
    });
});

function getCurrentDate() {
    var currentDate = new Date();
    var day = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate();
    var month = ((currentDate.getMonth() + 1) < 10 ? '0' : '') + (currentDate.getMonth() + 1);
    var year = currentDate.getFullYear();
    var hour = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
    var minute = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
    var second = (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();

    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}