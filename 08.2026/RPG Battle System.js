class Item {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
}
class Character {
    constructor(name, health, attack, defense) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.attack = attack;
        this.defense = defense;
        this.inventory = [];
    }
    info() {
        return this.name + " — " + "HP: " + this.health + "/" + this.maxHealth + " ATK: " + this.attack + " DEF: " + this.defense;
    }
    isAlive() {
        return this.health > 0;
    }
    addItem(item) {
        this.inventory.push(item);
    }
    usePotion() {
        for (let f = 0; f < this.inventory.length; f++) {
            if (this.inventory[f].type === "potion") {
                this.health = this.health + this.inventory[f].value;
                if (this.health > this.maxHealth) {
                    this.health = this.maxHealth;
                }
                this.inventory.splice(f, 1);
                return;
            }
        }
        return "you have no potion";
    }
    takeDamage(damage) {
        this.health = this.health - damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }
    takeTurn(target) {
        let damage = this.attack;
        damage = damage - target.defense;

        if (damage < 1) {
            damage = 1;
        }

        target.takeDamage(damage);

        return this.name + " attacked " + target.name + " and figured it out " + damage + " damage";
    }
    equip(itemName) {
        for (let f = 0; f < this.inventory.length; f++) {
            if (this.inventory[f].name === itemName) {
                if (this.inventory[f].type === "weapon") {
                    this.attack = this.attack + this.inventory[f].value;
                    this.inventory.splice(f, 1);
                    return;
                } else if (this.inventory[f].type === "armor") {
                    this.defense = this.defense + this.inventory[f].value;
                    this.inventory.splice(f, 1);
                    return;
                }
            }
        }
    }
}
class Warrior extends Character {
    constructor(name, health, attack, defense) {
        super(name, health, attack, defense);
        this.rage = 0;
    }
    powerStrike(target) {
        if (this.rage >= 10) {
            let damage = this.attack * 2;
            damage = damage - target.defense
            if (damage < 1) {
                damage = 1;
            }

            target.takeDamage(damage);
            this.rage = this.rage - 10;
        }
    }
    takeDamage(damage) {
        this.health = this.health - damage;
        if (this.health < 0) {
           this.health = 0;
        }
        this.rage = this.rage + 5;
    }
    takeTurn(target) {
       if (this.rage >= 10) {
            this.powerStrike(target);
            return this.name + " used Power Strike on " + target.name;
        }
        return super.takeTurn(target);
    }
}
class Mage extends Character {
    constructor(name, health, attack, defense, mana) {
        super(name, health, attack, defense);
        this.mana = mana;
    }
    castSpell(target, manaCost, damage) {
        if (this.mana >= manaCost) {
            target.takeDamage(damage);
            this.mana = this.mana - manaCost;
        } else {
            return "Not enough mana";
        }
    }
    takeTurn(target) {
        if (this.mana >= 10) {
            this.castSpell(target, 10, 25);
            return this.name + " used spell on " + target.name;
        }

        return super.takeTurn(target);
    }
}
class Rogue extends Character {
    constructor(name, health, attack, defense, critChance) {
        super(name, health, attack, defense);
        this.critChance = critChance;

    }
    backstab(target) {
        let checkCriticChance = Math.random();
        let damage = this.attack;
        damage = damage - target.defense

        if (damage < 1) {
            damage = 1;
        }
        if (checkCriticChance < this.critChance) {
            damage = damage * 3;
        }

        target.takeDamage(damage);
    }
    takeTurn(target) {
        this.backstab(target);
        return this.name + " used Backstab on " + target.name;
    }
}
class Battle {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.log = [];
    }
    takeTurn (attacker, defender) {
        let fightInformation = attacker.takeTurn(defender);

        this.log.push(fightInformation);
        console.log(fightInformation);
    }
    fight () {
        while (this.player1.isAlive() && this.player2.isAlive()) {
            this.takeTurn(this.player1, this.player2);

            console.log(this.player1.info());
            console.log(this.player2.info());

            if (!this.player2.isAlive()) {
                break;
            }

            this.takeTurn(this.player2, this.player1);
            console.log(this.player1.info());
            console.log(this.player2.info());
            if (!this.player1.isAlive()) {
                
                break;
            }
        }
        let winner;
        if (!this.player1.isAlive()) {
            winner = this.player2;
        } else {
            winner = this.player1;
        }
        this.log.push("our winner is " + winner.name);
        console.log("our winner is " + winner.name);
        return winner;
    }
}
let sword = new Item("Sword", "weapon", 17);
let armor = new Item("Armor", "armor", 32);
let potion = new Item("Potion", "potion", 22);
let potion2 = new Item("Potion", "potion", 22);

let warrior = new Warrior("Warrior", 120, 20, 5);
let mage = new Mage("Mage", 100, 18, 3, 50);
let rogue = new Rogue("Rogue", 90, 22, 4, 0.3);

warrior.addItem(sword);
warrior.addItem(armor);
warrior.addItem(potion);

mage.addItem(potion2);

warrior.equip("Sword");
warrior.equip("Armor");

let battle1 = new Battle(warrior, mage);
let winner = battle1.fight();

winner.usePotion();

let battle2 = new Battle(winner, rogue);
let finalWinner = battle2.fight();

console.log(battle1.log);
console.log(battle2.log);

console.log("The Final winner " + finalWinner.name);