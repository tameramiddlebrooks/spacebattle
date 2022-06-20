// hull is the same as hitpoints. 
// If hull reaches 0 or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target 
// with a successful hit
// accuracy is the chance between 0 and 1 that the ship 
// will hit its target
// create captain and alien objects w/ their properties //
// create the attack action. depending on the accuracy of the
// ^ attack, the opponent will have its hitpoints "hull"
// ^ subtracted from the firepower


// const captain = {
//     hull: 20,
//     firepower: 5,
//     accuracy: .7
// }
//     attack(target) {
//     let ranNum = Math.random();
//     console.log(`Accuracy threshold is ${ranNum}`);
//     if (ranNum < this.accuracy) {
//         console.log(`You've been hit!`);
//         target.hull = target.hull - this.firepower;
//         console.log(`hero has ${target.hull} hull points left.`);
//         if (target.hull <= 0) {
//             target.isAlive = false;
//             console.log(`You have died, your people will now be used as cattle for the CRAVERSSS!!! GRRZZT ZOIK!`);

        
//         } else {
//             console.log(`Direct hit! Good job, ${captain}!`);
//         }
//     }
// }

    // hull - between 3 and 6
    // firepower - between 2 and 4
    // accuracy - between .6 and .8 (.8-.6=.2+.6=.8);

// const alien = {
//     hull: Math.round((Math.random() * (6 - 3)) + 3),
//     firepower: Math.round((Math.random() * (4 - 2)) + 2),
//     accuracy: (Math.random() * (0.8 - 0.6)) + 0.6
// }
// attack(opponent) ;{
//     let randomNumber = Math.random();
//     if (randomNumber > this.accuracy) {
//         console.log('You\'ve been hit!');
//         opponent.hull = opponent.hull - opponent.firepower;
//         console.log(`The captain's ship hull now has ${opponent.hull} points left.}`);
//     } else {
//         console.log('The captain missed!');
//     }
// }