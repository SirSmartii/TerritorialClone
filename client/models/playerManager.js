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

function loadPlayers(players) {
    let keys = Object.keys(players);
    keys.forEach((key) => {
        addPlayer(key);
        PlayerList[key].spawnPlayer(app);
    });
}

function removePlayer(socketID) {
    delete PlayerList[socketID];
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