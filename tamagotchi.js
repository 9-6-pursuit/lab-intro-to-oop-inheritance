// Create class below

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }

    status() {
        console.log(`
********************
My mood is: ${this.mood}
I am this full: ${this.full}
My energy is: ${this.energy}
I am ${this.sick ? 'sick' : 'not sick'}
********************`);
    }

    eat() {
        this.full += 2;
        this.energy -= 1;

        if (this.full > 10) {
            this.sick = true;
            console.log(`${this.name} is now sick.`);
        }
    }

    medicate() {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
            console.log(`${this.name} takes medicine and feels better.`);
        } else {
            console.log(`${this.name} refuses to take medicine.`);
            this.energy -= 1;
        }
    }
    

    play() {
        if (this.sick) {
            this.mood -= 1;
            this.energy -= 1;
            console.log(`${this.name} is too sick to play.`);
        } else if (this.mood > 9) {
            this.energy -= 2;
            this.full -= 1;
            console.log(`${this.name} is in a great mood and doesn't want to play.`);
        } else if (this.energy <= 3) {
            console.log(`${this.name} is too tired to play.`);
            this.energy -= 1;
        } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
            console.log(`${this.name} is playing and having fun!`);
        }
    }

    sleep() {
        this.energy += 4;
        this.full -= 3;
    }

    timePasses() {
        if (this.sick) {
            this.mood -= 3;
            this.full -= 2; 
            this.energy -= 2; 
        } else {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }
    
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            this.rehomed = true;
        }
    }
    

    badGuardian() {
        console.log(`You have been a bad guardian. ${this.name} has been rehomed.`);
        this.rehomed = true;
    }
}


// Do not edit below this line
module.exports = Tamagotchi;


