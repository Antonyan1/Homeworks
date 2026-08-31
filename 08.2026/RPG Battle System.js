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
    equip(itemName) {
        for (let f = 0; f < this.inventory.length; f++) {
            if (this.inventory[f].name === itemName) {
                if (this.inventory[f].type === "weapon") {
                    this.attack = this.attack +  this.inventory[f].value;
                } else if (this.inventory[f].type === "armor") {
                    this.defense = this.defense + this.inventory[f].value;
                }
                this.inventory.splice(f, 1);
                return;
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
            target.health = target.health - damage;
            if (target.health < 0) {
                target.health = 0;
            }

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
}
class Mage extends Character {
    constructor(name, health, attack, defense, mana) {
        super(name, health, attack, defense);
        this.mana = mana;
    }
    castSpell(target, manaCost, damage) {
        if (this.mana >= manaCost) {
            if (target === warrior) {
                target.takeDamage(damage);
            } else {
                target.health = target.health - damage;

                if (target.health < 0) {
                    target.health = 0;
                }
            }
            this.mana = this.mana - manaCost;
        } else {
            return "Not enough mana";
        }
    }
}
class Rogue extends Character {
    constructor(name, health, attack, defense, critChance) {
        super(name, health, attack, defense);
        this.critChance = critChance;

    }
    backstab(target) {
        let checkCriticChance = Math.random();
        let damage;

        if (checkCriticChance < this.critChance) {
            damage = this.attack * 3;
        } else {
            damage = this.attack;
        }
        if (target === warrior) {
            target.takeDamage(damage);
        } else {
            target.health = target.health - damage;

            if (target.health < 0) {
                target.health = 0;
            }
        }
    }
}
class Battle {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.log = [];
    }
    attackTurn(attacker, defender) {
        let damage = attacker.attack - defender.defense;
        
        if (damage < 1) {
            damage = 1;
        }
        
        if (defender === warrior) {
            defender.takeDamage(damage);
        } else {
            defender.health = defender.health - damage;
            if (defender.health < 0) {
                defender.health = 0;
            }
        }

        let fightInformation = attacker.name + " attacked " + defender.name + " and dealt " + damage + " damage";
        this.log.push(fightInformation);
        console.log(fightInformation);
    }
    fight() {
        while (this.player1.isAlive() && this.player2.isAlive()) {
            if (this.player1 === warrior && warrior.rage >= 10) {
                warrior.powerStrike(this.player2);
                    let info = warrior.name + " used Power Strike on " + this.player2.name;
                    this.log.push(info);
                    console.log(info);
            } else if (this.player1 === mage && mage.mana >= 10) {
                mage.castSpell(this.player2, 10, 25);

                let info = mage.name + " used spell on " + this.player2.name;
                this.log.push(info);
                console.log(info);
            } else if (this.player1 === rogue) {
                rogue.backstab(this.player2);
                let info = rogue.name + " used Backstab on " + this.player2.name;
                this.log.push(info);
                console.log(info);
            } else {
                this.attackTurn(this.player1, this.player2)
            }
            console.log(this.player1.info());
            console.log(this.player2.info());
            if (!this.player2.isAlive()) {
               break;
            }
            if (this.player2 === warrior && warrior.rage >= 10) {
                warrior.powerStrike(this.player1);

                let info = warrior.name + " used Power Strike on " + this.player1.name;
                this.log.push(info);
                console.log(info);
            } else if (this.player2 === mage && mage.mana >= 10) {
                mage.castSpell(this.player1, 10, 25);

                let info = mage.name + " used spell on " + this.player1.name;
                this.log.push(info);
                console.log(info);
            } else if (this.player2 === rogue) {
                rogue.backstab(this.player1);

                let info = rogue.name + " used Backstab on " + this.player1.name;
                this.log.push(info);
                console.log(info);

            } else {
                this.attackTurn(this.player2, this.player1)
            }
            console.log(this.player1.info());
            console.log(this.player2.info());
            if (!this.player1.isAlive()) {
               break;
            }
        }

        let winner;
        if (this.player1.isAlive()) {
            winner = this.player1;
        } else {
            winner = this.player2;
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