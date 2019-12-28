const app = require('http').createServer(response);
const fs = require('fs');
const io = require('socket.io')(app);

// TODO: find better way to include class
let chatFile = require('./app/Chat');

let chat = new chatFile.Chat(io);
chat.listen();

app.listen(8080);
console.log("App running…");

function response(req, res) {
    fs.readFile(__dirname + '/public/html/index.html',
        function (err, data) {
            let file = '';
            if (req.url === '/') {
                file = __dirname + '/public/html/index.html';
            } else {
                file = __dirname + '/public' + req.url;
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
