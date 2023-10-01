// Create class below
class Food {
	constructor(name, daysToSpoil, fresh = true) {
		this.name = name;
		this.daysToSpoil = daysToSpoil;
		this.fresh = fresh;
	}

	prepare() {
		console.log(`${this.name} is being prepared`);
	}

	isFresh() {
		if (this.fresh && this.daysToSpoil >= 0) {
			console.log(
				`There are ${this.daysToSpoil} days left before ${this.name} spoils.`
			);
		} else {
			console.log(`${this.name} has spoiled.`);
		}
	}

	aDayPasses() {
		if (this.daysToSpoil > 0) {
			this.daysToSpoil--;
			this.isFresh();
		} else {
			console.log(`${this.name} has already spoiled.`);
		}
	}
}

// Create an instance of the Food class
const iceCream = new Food("Ice Cream", 3);

// Test the methods
iceCream.prepare(); // Output: "Ice Cream is being prepared."
iceCream.isFresh(); // Output: "There are 3 days left before Ice Cream spoils."
iceCream.aDayPasses(); // Output: "There are 2 days left before Ice Cream spoils."
iceCream.aDayPasses(); // Output: "There are 1 day left before Ice Cream spoils."
iceCream.aDayPasses(); // Output: "There are 0 days left before Ice Cream spoils."
iceCream.aDayPasses(); // Output: "Ice Cream has already spoiled."

// Do not edit below this line
module.exports = Food;
