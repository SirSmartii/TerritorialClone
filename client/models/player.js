export class Player {
    constructor() {
        this.playerSprite = null;
        this.playerName = null;
    }

    spawnPlayer(app, _PIXI) {
        this.playerSprite = _PIXI.Sprite.from('./client/assets/player.png');
        this.playerSprite.anchor.set(0.5);
        this.playerSprite.width = 50;
        this.playerSprite.height = 50;
        this.playerSprite.x = 0;
        this.playerSprite.y = 0;
        app.stage.addChild(this.playerSprite);
    }

    setPosition(x, y) {
        this.playerSprite.x = x;
        this.playerSprite.y = y;
    }

    setPlayerSprite(playerSprite) {
        this.playerSprite = playerSprite;
    }

    setPlayerName(playerName) {
        this.playerName = playerName;
    }

    getPosition()
    {
        return {
            x: this.playerSprite.x,
            y: this.playerSprite.y
        };
    }

    getPlayerSprite() {
        if(this.playerSprite == null) {
            throw new Error("Player sprite is not initialized!");
        }
        return this.playerSprite;
    }

    getPlayerName() {
        return this.playerName;
    }

    getSocketID() {
        return this.socketID;
    }
}