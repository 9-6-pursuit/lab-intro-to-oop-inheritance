// Create class below
class Tamagotchi {
    constructor(name, energy=9, full=8, mood=6, sick=false, rehomed=false){
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet(){
        `Hello, I'm ${this.name}!`
    }

    status(){
        if (this.sick=true){
        console.log(`********/nMy mood is: ${this.mood} /nI am this full: ${this.full} /nMy energy is: ${this.energy} /n"I am sick"/n*******`)
        } else {
            console.log(`********/nMy mood is: ${this.mood} /nI am this full: ${this.full} /nMy energy is: ${this.energy} /n"I am not sick"/n*******`)
        }
    }

    eat(){
        this.energy -= 1;
        this.full += 2;
        if (this.full>10){
            this.sick=true;
        }
    }

    medicate(){
        if (!this.sick){
            console.log("No! I am not sick!");
            this.energy -= 1;
        } else {
            this.energy -= 3;
            this.full = 9;
            this.sick = false;
        }
    }

    play(){  
        // will not play if tamagotchi is sick,
        // if asked to play when sick, reduce mood and energy by 1
        if (this.sick) {
            this.mood -= 1;
            this.energy -= 1;
        }
        // will not play if mood is above 9, reduce energy by 2 and full by 1
        else if( this.mood > 9 ){
            this.energy -= 2;
            this.full -= 1;
        }
        // will not play if energy is less than or equal to 3
        // console log "I am too tired to play" - reduce energy by 1
        else if(this.energy < 4) {
            console.log("I am too tired to play");
            this.energy -= 1;
        } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
        }
    }

    // sleep increases energy by 4 and decreases full by 3
    sleep(){
        this.energy += 4;;
        this.full -= 3;
    }


    /* timePasses:
        if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1 
        -if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
    */
    timePasses(){
        if (this.sick) {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        } else {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }
    }
        /*
        badGuardian
        logs a message that the tamagotchi has been rehomed
        if energy is less than or equal to 0, set rehomed to true
        if mood is less than or equal to 0 set rehomed to true
        ??? if full is less than or equal to true set rehomed to true???
        */

    badGuardian(){
        if(this.energy<1 || this.mood<1 || this.full<1) {this.rehomed = true}
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
