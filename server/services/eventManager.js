import { Server } from 'socket.io';
import * as playerManager from '../models/playerManager.js';


let io = null;

function initializeSocket(server) {
    io = new Server(server);

    io.on('connection', (socket) => {
        console.log("Client verbunden:", socket.id);
        playerManager.addPlayer(socket.id, socket);

        socket.on('disconnect', () => {
            console.log("Client getrennt:", socket.id);
        });
    });
}

function getIO() {
    if (!io) {
        throw new Error("Socket.io wurde noch nicht initialisiert!");
    }
    return io;
}

export {
    initializeSocket, getIO
}

