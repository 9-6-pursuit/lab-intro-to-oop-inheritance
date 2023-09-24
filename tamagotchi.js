// Create class below

class Tamagotchi {
    constructor(name){
        this.name = name
        this.energy = 9
        this.full = 8
        this.mood = 6
        this.sick = false
        this.rehome = false
    }

    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }

    status(){
        console.log(`********************
        My mood is: ${this.mood}
        I am this full: 8
        My energy is: 9
        I am ${!this.sick? "" : "not"} sick
        ********************`)
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
