// Create class below

class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehome = false;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  status() {
    console.log(`********************
        My mood is: ${this.mood}
        I am this full: 8
        My energy is: 9
        I am ${!this.sick ? "" : "not"} sick
        ********************`);
  }
  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log(`refusal to take medicine`);
      this.energy--;
    }
  }

  play() {
    if (this.sick) {
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
    } else if (this.energy <= 3) {
      console.log(`I am too tired to play`);
      this.energy--;
    } else {
      this.mood += 2;
      this.energy--;
      this.full--;
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
    if (this.energy <= 0 || this.full <= 0 || this.mood <= 0) {
      console.log("tamagotchi has been rehomed");
      this.rehomed = true;
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
