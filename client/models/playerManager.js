import * as Player from './player.js';

let PlayerList = {}
let app = null;
let PIXI = null;

function initPlayerManager(_app, _pixi) {
    app = _app;
    PIXI = _pixi;
}

function addPlayer(playerData) {
    PlayerList[playerData.socketID] = new Player.Player(playerData.socketID);
    PlayerList[playerData.socketID].spawnPlayer(app, PIXI);
    PlayerList[playerData.socketID].setPosition(playerData.x, playerData.y);
    PlayerList[playerData.socketID].setPlayerName(playerData.name);
}

function loadPlayers(_PlayerList) {
    let keys = Object.keys(_PlayerList);
    keys.forEach((key) => {
        if (PlayerList[key] == null && PlayerList[key]) {
            PlayerList[key] = new Player.Player(key);
            PlayerList[key].spawnPlayer(app, PIXI);
            PlayerList[key].setPosition(_PlayerList[key].x, _PlayerList[key].y);
            PlayerList[key].setPlayerName(_PlayerList[key].name);
        }
    });
    console.log("Players loaded: " + keys.length);
}

function removePlayer(socketID) {
    if (PlayerList[socketID] == null) {
        console.error("Player not found: " + socketID);
        return;
    }
    PlayerList[socketID].getPlayerSprite().destroy();
    delete PlayerList[socketID];
    console.log("Player removed: " + socketID);
}

function getPlayer(socketID) {
    return PlayerList[socketID];
}

function getPlayerList() {
    return PlayerList;
}

function getPlayerCount() {
    return Object.keys(PlayerList).length;
}


export {
    loadPlayers,
    initPlayerManager,
    addPlayer,
    removePlayer,
    getPlayer,
    getPlayerList,
    getPlayerCount
}