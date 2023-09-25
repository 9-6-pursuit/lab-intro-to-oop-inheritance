// Create class below
class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = name;
    this.energy = energy || 9;
    this.full = full || 8;
    this.mood = mood || 6;
    this.sick = sick || false;
    this.rehomed = rehomed || false;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  status() {
    console.log(
      `My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${
        this.energy
      }\nI am ${this.sick ? "" : "not "}sick\n\n`
    );
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
    if (!this.sick) {
      this.mood -= 2;
      this.full--;
      this.energy--;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }

  badGuardian() {
    if (this.energy <= 0) {
      this.rehomed = true;
    }

    if (this.mood <= 0) {
      this.rehomed = true;
    }

    if (this.full <= 0) {
      this.rehomed = true;
    }

    if (this.rehomed) {
      console.log(`${this.name} has been rehomed.`);
    }
  }
}

const pet = new Tamagotchi("Albert", 2, 3, 5, false, true);
pet.status();

pet.medicate();
while (!pet.sick) {
  pet.eat();
  pet.status();
}
pet.medicate();
pet.status();

pet.play();
pet.sleep();
pet.timePasses();
pet.badGuardian();




// Do not edit below this line
module.exports = Tamagotchi;
