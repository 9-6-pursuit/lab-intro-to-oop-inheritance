// Create class below
class Tamagotchi {
  constructor(name) {
    console.log("Running Tamagotchi constructor ...");
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
    let wellnessCheck = !this.sick ? "not sick" : "sick";
    console.log(`********************
My mood is: ${this.mood}
I am this full: ${this.full}
My energy is: ${this.energy}
I am ${wellnessCheck}
********************`);
  }
  eat() {
    this.full += 2;
    this.energy -= 1;

    if (this.full > 10) this.sick = true;
  }
  medicate() {
    this.sick
      ? (this.full = 9) && (this.energy -= 3) && (this.sick = false)
      : (this.energy -= 1) && console.log("Medication Refused");
  }
  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      this.energy -= 1;
      console.log("I am too tired to play");
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
  timePasses() {
    !this.sick
      ? (this.mood -= 2) && (this.full -= 1) && (this.energy -= 1)
      : (this.mood -= 3) && (this.full -= 2) && (this.energy -= 2);
  }
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
      console.log(`
****** BAD GUARDIAN ALERT ******
Your Tamagotchi ${this.name} Has Been Rehomed!
****** BAD GUARDIAN ALERT ******`);
    }
  }
}

const pichu = new Tamagotchi("Pichu");
const charchar = new Tamagotchi("Char Char");
const meepmeep = new Tamagotchi("Meep Meep");

charchar.full = 0;
charchar.sick = false;
meepmeep.full = 10;
pichu.mood = 0;

pichu.greet();
charchar.status();
meepmeep.eat();
meepmeep.status();
meepmeep.play();
meepmeep.medicate();
charchar.medicate();
pichu.timePasses();
pichu.status();
meepmeep.sleep();
pichu.badGuardian();

// Do not edit below this line
module.exports = Tamagotchi;
