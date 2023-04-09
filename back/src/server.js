const fs = require("fs");
const http = require("http");
const characters = require("./data")


const PORT = 3001;

http.createServer((req, res) => {
    console.log("Hello this server is runing in port " + PORT);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        const id = req.url.split('/');
        const person = characters.find(finding => finding.id === Number(id[id.length - 1]));
        if (person) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(person))
            return;
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('id no encontrado');
            return;
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end("error the json")
        return
    }
}).listen(PORT, '127.0.0.1');