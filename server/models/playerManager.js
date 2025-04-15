import * as Player from './player.js';

let PlayerList = {}


function addPlayer(socketID, socket) {
    PlayerList[socketID] = new Player.Player(socketID);
    PlayerList[socketID].setPosition(PlayerList[socketID].getRandomPosition().x, PlayerList[socketID].getRandomPosition().y);
    PlayerList[socketID].setName("Player: " + socketID);
    socket.emit('player:spawn', PlayerList[socketID].getPlayerDataForClient());
}


export {
    addPlayer
}