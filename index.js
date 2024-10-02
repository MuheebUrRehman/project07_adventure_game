#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    { name: "name", type: "input", message: "please enter your name" },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent",
        choices: ["skeleton", "alien", "zombie"],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //skeleton
    if (opponent.select === "skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["attack", "drink portion", "run for your life"],
            },
        ]);
        if (ask.opt === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose! better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("you win!");
                    process.exit();
                }
            }
        }
        if (ask.opt === "drink portion") {
            p1.fuelIncrease();
            console.log(`your drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt === "run for your life") {
            console.log("you loose! better luck next time");
            process.exit();
        }
    }
    // alien
    if (opponent.select === "alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["attack", "drink portion", "run for your life"],
            },
        ]);
        if (ask.opt === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose! better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("you win!");
                    process.exit();
                }
            }
        }
        if (ask.opt === "drink portion") {
            p1.fuelIncrease();
            console.log(`your drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt === "run for your life") {
            console.log("you loose! better luck next time");
            process.exit();
        }
    }
    // zombie
    if (opponent.select === "zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["attack", "drink portion", "run for your life"],
            },
        ]);
        if (ask.opt === "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose! better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("you win!");
                    process.exit();
                }
            }
        }
        if (ask.opt === "drink portion") {
            p1.fuelIncrease();
            console.log(`your drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt === "run for your life") {
            console.log("you loose! better luck next time");
            process.exit();
        }
    }
} while (true);
