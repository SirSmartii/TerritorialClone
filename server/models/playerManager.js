import * as Player from './player.js';

let PlayerList = {}

let io;

function initPlayerManager(_io) {
    io = _io;
}

function addPlayer(socketID, socket) {
    loadPlayers(socket);
    PlayerList[socketID] = new Player.Player(socketID);
    PlayerList[socketID].setPosition(PlayerList[socketID].getRandomPosition().x, PlayerList[socketID].getRandomPosition().y);
    PlayerList[socketID].setName("Player: " + socketID);
    socket.emit('player:spawn', PlayerList[socketID].getPlayerDataForClient());
    io.emit('player:spawned', PlayerList[socketID].getPlayerDataForClient());
}

function loadPlayers(socket) {
    const clientData = Object.values(PlayerList).map(player => player.getPlayerDataForClient());
    socket.emit('player:load', clientData);
    console.log(clientData);
}

function removePlayer(socketID) {
    io.emit('player:remove', socketID);
    delete PlayerList[socketID];
}



export {
    loadPlayers,
    addPlayer,
    initPlayerManager,
    removePlayer
}