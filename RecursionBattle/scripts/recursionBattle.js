//#region Characters
var enemies = [
    {   "Name" : "Shredder",
        "Enemy Type": "Final Boss",
        "Special Ability": "Shredding",
        "Hit points": 1000.0,
        "Power" : 100.0,
        "Dodge" : 50.0,
        "Block" : 50.0,
     },
     {  "Name" : "Krang",
        "Enemy Type": "Hard Boss",
        "Special Ability": "Brain Power",
        "Hit points": 800.0,
        "Power" : 80.0,
        "Dodge" : 20.0,
        "Block" : 50.0,
    },
    {   "Name" : "Baxter Stockman",
        "Enemy Type": "Mini Boss",
        "Special Ability": "Lasers",
        "Hit points": 600.0,
        "Power" : 70.0,
        "Dodge" : 50.0,
        "Block" : 20.0,
    },
    {   "Name" : "Bebop & Rocksteady",
        "Enemy Type": "Mini Boss",
        "Special Ability": "Headbutting",
        "Hit points": 600.0,
        "Power" : 60.0,
        "Dodge" : 30.0,
        "Block" : 30.0,
    },
    {   "Name" : "The Foot",
        "Enemy Type": "Final Boss",
        "Special Ability": "Shredding",
        "Hit points": 300.0,
        "Power" : 20.0,
        "Dodge" : 10.0,
        "Block" : 10.0,
    },
];

var heroes = [
    {   "Name" : "Michelangelo",
        "Hero Type": "Turtle",
        "Special Ability": "Nunchaku",
        "Hit points": 1000.0,
        "Power" : 100.0,
        "Dodge" : 60.0,
        "Block" : 30.0,
     },
     {  "Name" : "Leonardo",
        "Hero Type": "Turtle",
        "Special Ability": "Katana",
        "Hit points": 1000.0,
        "Power" : 80.0,
        "Dodge" : 20.0,
        "Block" : 50.0,
    },
    {   "Name" : "Raphael",
        "Hero Type": "Turtle",
        "Special Ability": "Sai",
        "Hit points": 1000.0,
        "Power" : 70.0,
        "Dodge" : 50.0,
        "Block" : 20.0,
    },
    {   "Name" : "Donatello",
        "Hero Type": "Turtle",
        "Special Ability": "Bo Staff",
        "Hit points": 1000.0,
        "Power" : 60.0,
        "Dodge" : 30.0,
        "Block" : 30.0,
    },
];
//#endregion

var heroMultiplier;
function heroRoll(){
    heroMultiplier = Math.floor(Math.random()*10)
    // document.getElementById("playerMessage").innerHTML = heroMultiplier;
    console.log(`Hero Roll = ${heroMultiplier}`)
}

var enemyMultiplier;
function enemyRoll(){
    heroMultiplier = Math.floor(Math.random()*10)
    // document.getElementById("playerMessage").innerHTML = heroMultiplier;
    console.log(`Enemy Roll = ${heroMultiplier}`)
}

heroRoll();
enemyRoll();
// const enemyMap = new Map(Object.entries(enemies[3, 3]));
// console.log(enemyMap);
function enemySelection(){
    randomBoss = Math.floor(Math.random()*4)
    var bossName = enemies[randomBoss]["Name"];
    var bossPower = enemies[randomBoss]["Power"];
    console.log(`${bossName} enters the room. They have ${bossPower} of power. Are you ready to battle?`);
}
function heroSelection(){
    randomHero = Math.floor(Math.random()*4)
    var heroName = heroes[randomHero]["Name"];
    var heroPower = heroes[randomHero]["Power"];
    console.log(`${heroName} is ready for battle! He has ${heroPower} of power. Are you ready to battle?`);
}
// var boss = enemies[0]["Power"];
enemySelection();
heroSelection();
// console.log(boss);












