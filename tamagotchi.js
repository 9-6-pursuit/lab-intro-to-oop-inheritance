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
      console.log(`Energy: ${this.energy}, Fullness: ${this.full}, Mood: ${this.mood}, Sick: ${this.sick}`);
    }
  
    eat() {
      if (!this.sick) {
        this.full += 2;
        this.energy -= 1;
        if (this.full > 10) {
          this.sick = true;
          console.log(`${this.name} is now sick.`);
        }
      } else {
        console.log(`${this.name} refuses to eat when sick.`);
        this.energy -= 1;
      }
    }
  
    medicate() {
      if (this.sick) {
        this.full = 9;
        this.energy -= 3;
        this.sick = false; // Tamagotchi is no longer sick
      } else {
        console.log("Refusal to take medicine. Tamagotchi is not sick.");
        this.energy -= 1;
      }
    }
  
    play() {
      if (!this.sick) {
        if (this.mood <= 9 && this.energy > 3) {
          this.mood += 2;
          this.energy -= 1;
          this.full -= 1;
        } else {
          console.log("Tamagotchi won't play.");
          if (this.mood > 9) {
            this.energy -= 2;
            this.full -= 1;
          } else if (this.energy <= 3) {
            console.log("I am too tired to play.");
            this.energy -= 1;
          }
        }
      } else {
        console.log("Tamagotchi won't play because it's sick.");
      }
    }
  
    sleep() {
      this.energy += 4;
      this.full -= 3;
    }
  
    timePasses() {
      if (!this.sick) {
        this.mood -= 2;
        this.energy -= 1;
        this.full -= 1;
      } else {
        this.mood -= 3;
        this.energy -= 2;
        this.full -= 2;
      }
    }
  
    badGuardian() {
      if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
        this.rehomed = true;
        console.log("Tamagotchi has been rehomed.");
      }
    }
  }
  
  module.exports = Tamagotchi;
  