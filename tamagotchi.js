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
		console.log(
			`********************\nMy Mood is: ${this.mood}\nI am this full: ${
				this.full
			}\nMy energy is: ${this.energy}\n${
				this.sick ? "I am sick" : "I am not sick"
			}\n********************\n`
		);
	}

	eat() {
		if (this.sick) {
			this.full = 9;
			this.energy -= 3;
		} else {
			this.full += 2;
			this.energy -= 1;
			if (this.full > 10) {
				this.sick = true;
			}
		}
	}

	medicate() {
		if (this.sick) {
			this.full = 9;
			this.energy -= 3;
			this.sick = false;
		} else {
			console.log("Refusal to take medicine");
			this.energy -= 1;
		}
	}

	play() {
		if (this.sick) {
			this.mood -= 1;
			this.energy -= 1;
		} else if (this.mood > 9) {
			console.log("I am too happy to play.");
			this.energy -= 2;
			this.full -= 1;
		} else if (this.energy <= 3) {
			console.log("I am too tired to play.");
			this.energy -= 1;
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
		if (this.sick) {
			this.mood -= 3;
			this.energy -= 2;
			this.full -= 2;
		} else {
			this.mood -= 2;
			this.energy -= 1;
			this.full -= 1;
		}
	}

	badGuardian() {
		console.log(`Tamagotchi ${this.name} has been rehomed.`);
		this.rehomed = true;
	}
}

// Create a Tamagotchi instance
const myTamagotchi = new Tamagotchi("Tama");

// Test the methods
myTamagotchi.greet();
myTamagotchi.status();
myTamagotchi.eat();
myTamagotchi.status();
myTamagotchi.medicate();
myTamagotchi.status();
myTamagotchi.play();
myTamagotchi.status();
myTamagotchi.sleep();
myTamagotchi.status();
myTamagotchi.timePasses();
myTamagotchi.status();
myTamagotchi.badGuardian();

// Do not edit below this line
module.exports = Tamagotchi;
