export class Player{
    constructor(socketid) {
        this.name = "Default";
        this.socketid = socketid;
        this.position = { x: 0, y: 0};
        this.level = 1;
        this.xp = 0;
        this.health = 100;
        this.maxHealth = 100;
        this.stamina = 100;
        this.maxStamina = 100;
    }

    //#region Setter
    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    setName(name) {
        this.name = name;
    }

    setLevel(level) {
        this.level = level;
    }

    setXP(xp) {
        this.xp = xp;
    }

    setHealth(health) {
        this.health = health;
    }

    setMaxHealth(maxHealth) {
        this.maxHealth = maxHealth;
    }

    setStamina(stamina) {
        this.stamina = stamina;
    }

    setMaxStamina(maxStamina) {
        this.maxStamina = maxStamina;
    }


    //#endregion Setter

    //#region Getter
    getPosition() {
        return this.position;
    }

    getRandomPosition() {
        return {
            x: Math.floor(Math.random() * 100),
            y: Math.floor(Math.random() * 100)
        };
    }

    getName() {
        return this.name;
    }

    getLevel() {
        return this.level;
    }   

    getXP() {
        return this.xp;
    }

    getHealth() {
        return this.health;
    }

    getMaxHealth() {
        return this.maxHealth;
    }

    getStamina() {
        return this.stamina;
    }

    getMaxStamina() {
        return this.maxStamina;
    }

    getSocketID() {
        return this.socketid;
    }

    getPlayerData() {
        return {
            socketid: this.socketid,
            name: this.name,
            level: this.level,
            xp: this.xp,
            health: this.health,
            maxHealth: this.maxHealth,
            stamina: this.stamina,
            maxStamina: this.maxStamina
        };
    }

    getPlayerDataForClient() {
        return {
            socketID: this.socketid,
            name: this.name,
            x: this.position.x,
            y: this.position.y
        };
    }
}