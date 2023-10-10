// Create class below
class Tamagotchi {
    constructor  () {
       this.name = this.name || "Fizz"
       this.energy = 9
       this.full = 8
       this.mood = 6
       this.sick = false
       this.rehomed = false
    }

    greet () {
        console.log(` Hello, I'm ${this.name}`)
    }

    status(){
        console.log(`********************
        My mood is: ${this.mood}
        I am this full: 8
        My energy is: 9
        I am ${!this.sick? "" : "not"} sick
        ********************`)
    }

    eat() {
        this.full += 2;
        this.energy --;
        this.full > 10 ? (this.sick = true) : null;
    }

    medicate () {
        if (this.sick === true) {
           this.full = 9;
           this.energy -= 3;
           this.sick = !this.sick;
        } else {
           console.log(`${this.name} doesn't want medicine`)
           this.energy -= 1;
        }
    }

    play() {
        if (this.sick === true) {
          this.mood--;
          this.energy--;
        } else if (this.mood > 9) {
          this.energy -= 2;
          this.full--;
        } else if (this.energy <= 3) {
          console.log("I am too tired to play");
          this.energy--;
        } else {
          this.mood += 2;
          this.energy--;
          this.full--;
        }
      }

   sleep () {
       this.energy += 4 ;
       this.full -= 3;
   }

   timePasses () {
       if (!this.sick){
           this.mood -= 2;
           this.full -= 1;
           this.energy -= 1;
       } else {
           this.mood -= 3;
           this.full -= 2; 
           this.energy -= 2; 
       }
   }

   badGuardian() {
    this.energy <= 0 ? (console.log(`${this.name} has been rehomed.`), this.rehomed = true) : null;
    this.mood <= 0 ? (console.log(`${this.name} has been rehomed.`), this.rehomed = true) : null;
    this.full <= 0 ? (console.log(`${this.name} has been rehomed.`), this.rehomed = true) : null;
  }

}
// Do not edit below this line
module.exports = Tamagotchi;
