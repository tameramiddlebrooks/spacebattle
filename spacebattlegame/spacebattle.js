// create an object for the ships that contains
// ^ all the properties needed
// create an attack action as a function, using math.random()
//^ to generate the random number representing the chance of accuracy
//^ that the ship will meet its target
// create the loops needed for the attack between the 
// ^ captain and the aliens to take place
// ^ include conditions that will determine what happens when the captain/hero 

// hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
//firepower=the amount of damage done to the hull of the target with a successful hit
//accuracy=the chance between 0 and 1 that the ship will hit its target

// helloWorld properties 
// hull - 20
// firepower - 5
// accuracy - .7

// alien ship properties
// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8


let ussHelloWorld = {
    name: "Captain Ship",
    hull: 20,
    firepower: 5,
    accuracy: .7,

attack: function () {
    let randomNumber = Math.random()
    if (randomNumber >= this.accuracy) {
        console.log('You missed!')
    } else {
        console.log('Direct hit!');
    }
}

}
class alienShip {
constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
}
attack() {
    let randomNumber = Math.random()
    if (randomNumber >= this.accuracy) {
        console.log('You missed!')
    } else {
        console.log('Direct hit!');
}
}
}
// the game has a total of six alien ships.
// create array for the six ships
// create for loop for the six ships and push them into the aray
// create buttons for users to use and keep control over the loops

let alienShips = [];
for (let i = 0; i < 6; i++);
alienShips[i] = newShip(`Alien Ships ${i+1}`, 
    (Math.floor(Math.random() * (6 - 3) + 3)), 
    (Math.floor(Math.random() * (4 - 2) + 2)), 
    (Math.random() * (.8 - .6) + .6))

//     // create attack button for the player to use
//     // set up function for the battle between aliens & humans
//     // create boolean value to control the loops
//     // start off with a conditional for the ussHelloWorld and the alienShips
//     //^ussHelloWorld attacks alienShips,
//     //^update ussHelloWorld accordingly
//     //^update alienShips accordingly
//     // another conditional basically doing the same thing as the
//     //^three previous steps, except this time its the alienShips
//     //^attacking ussHelloWorld
//     // create a game over conditional if the ussHelloWorld hull 
//     //^ reaches less than 0
//     // and use a time out function set to 1 second 
//     // ^ to display "game over"
//     // use time out function again to display how many alien ships are left
//     //^at given point in the game
//     // use .remove() method to remove alien ships as the game goes on
//     // use conditional to display user win and remove options
//     //^once ussHelloWorld is greater than 0 & alienShips.length is equal to 0
//     //^set time 10 1 second

    $("#attack").click(function() {
      
        if (ussHelloWorld.hull > 0 && alienShips.length > 0) {
            ussHelloWorld.attack(alienShips[0]);
            ussHelloWorld.update();
            alienShips[0].update();

            if (alienShips[0].hull > 0) {
            alienShips[0].attack(heroShip);
            heroShip.update();
            alienShips[0].update();

            if (ussHelloWorld <= 0) {
                $("#hero").remove();
                $("#attack").remove();
                $("#retreat").remove();
                window.setTimeout(function() {
                    $("#hero").remove();
                    $("#aliens").after(console.log('GAME OVER! WOULD YOU LIKE TO TRY AGAIN?'));
                }, 1000)
            }
        } else {
            window.setTimeout(function() {
                console.log(`There are now: ${alienShips.length} alien ships left to battle!`)
                $("alienShips").remove();
                if (ussHelloWorld > 0 && alienShips.length === 0) {
                    $("#attack").remove();
                    $("#retreat").remove();
                    $("#hero").before(console.log('YOU WON! EARTH IS SAVED!'));
                }
            }, 1000)
    }
        }
    }) 
