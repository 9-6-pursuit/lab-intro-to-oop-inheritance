// Create class below
class Tamagotchi{
    constructor(name) {
        this.name = name;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }
    greet(){
       console.log(`Hello, I'm ${this.name}!`)
    } 

    status(){
       console.log(`My mood is: ${this.mood} /n
        I am this full: ${this.full} /n
        My energy is: ${this.energy} /n
        ${this.sick ? `I am not sick`: `I am sick:`} /n
       `)
    } 
    eat(){
        this.full += 2
        this.energy--
        if(this.full > 10){
            this.sick = true
        }
    } 
    medicate(){
        if(this.sick === true){
            this.full = 9;
            this.energy -= 3;
            this.sick = false
        } else {
            console.log("Refuses medicine")
            this.energy--
        }
    }
    play(){
        if(this.sick === true){
            this.mood --;
            this.energy --;
        } else if (this.mood > 9){
            this.energy -= 2;
            this.full --;
        } else if(this.energy <= 3){
            console.log("I am too tired to play" )
            this.energy --;
        } else {
            this.mood += 2;
            this.energy --;
            this.full --;
        }

    }
    sleep(){
        this.energy += 4;
        this.full -= 3;
    }
    timePasses(){
        if (this.sick === false) {
            this.mood -= 2;
            this.full--;
            this.energy--;
        } else {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
    }
    badGuardian(){
        if(this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            console.log("tamagotchi has been rehomed")
            this.rehomed = true
        }
    }
}

// Do not edit below this line
module.exports = Tamagotchi;
