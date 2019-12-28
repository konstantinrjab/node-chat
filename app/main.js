import fs from 'fs'
import Chat from './Classes/Chat'
import http from 'http'
import socket from 'socket.io'

const app = http.createServer(response);
const io = socket(app);

app.listen(8080);

let chat = new Chat(io);
chat.listen();

function response(req, res) {
    fs.readFile('public/html/index.html',
        function (err, data) {
            let file = '';
            if (req.url === '/') {
                file = 'public/html/index.html';
            } else {
                file = 'public' + req.url;
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
