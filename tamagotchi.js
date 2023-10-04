// Create class below
class Tamagotchi {
    constructor(name, energy=9, full=8, mood=6, sick=false, rehomed=false){
        this.name=name;
        this.energy=energy;
        this.full=full;
        this.mood=mood;
        this.sick=sick;
        this.rehomed=rehomed;
    }

    greet(name){
        `Hello, I'm ${name}!`
    }

    status(energy, full, mood, sick){
        console.log(`********/nMy mood is: ${mood} /nI am this full: ${full} /nMy energy is: ${energy} /n "I am sick" : "I am not sick"/n*******`)
    }

    eat(){

    }

    medicate(){

    }

    play(){
        this.mood=
    }

    sleep(){

    }

    timePasses(){

    }

    badGuardian(){

    }
}
// Do not edit below this line
module.exports = Tamagotchi;
