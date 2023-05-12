const express = require('express');
const cors = require('cors');
const {DataBase} = require("../database/db");
const http = require("http");
const socketio = require("socket.io");
const app = express();

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*"
    },
});

io.on('connection', socket => {
    console.log("connected");

    socket.on('tradesFromBot', (newTrades) => {
        console.log('tradesFromBot', newTrades);
        //io.emit('updateTrades', newTrades).find({account: "11307480" });
    });

    socket.on('params', (newTrades) => {
        io.emit('params', newTrades);
    });

    socket.on('stop', (newTrades) => {
        io.emit('stop', newTrades);
    });

    socket.on('restart', (newTrades) => {
        io.emit('restart', newTrades);
    });

    socket.on('watching', (newTrades) => {
        io.emit('watching', newTrades);
    });
});

class Server {

    constructor() {
        this.healthcheckPath = '/api/healthcheck';
        this.authPath = '/api/auth';
        this.tradePath = '/api/trades';
        this.accountPath = '/api/account';
        this.investorPath = '/api/admin'

        this.DataBase();
        this.middlewares();
        this.routes();
    }

    async DataBase() {
        await DataBase();
    }

    middlewares() {
        app.use(cors());
        app.use(express.json());
        app.use(express.static('public'));
    }

    routes() {
        app.use( this.healthcheckPath, require('../routes/healthcheck'));
        app.use( this.authPath, require('../routes/auth'));
        app.use( this.tradePath, require('../routes/trade'));
        app.use( this.accountPath, require('../routes/account'));
        app.use( this.investorPath, require('../routes/investor'));
    }

    listen() {
        const port = process.env.PORT || 8080
        server.listen(port, console.log("server running on port 8080"));
    }
}

module.exports = Server;
