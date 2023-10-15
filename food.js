// Create class below
class Food {
  constructor(name, daysToSpoil) {
    console.log("Running Food constructor...");
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = true;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil <= 0) {
      this.fresh = false;
      console.log(`${this.name} has spoiled.`);
    } else {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    }
  }
  aDayPasses() {
    if (this.daysToSpoil > 0) {
      this.daysToSpoil -= 1;
      this.isFresh();
    }
  }
}

const macNCheese = new Food("macNCheese", 3);
const chicken = new Food("chicken", 4);
const worms = new Food("worms", 0);

macNCheese.prepare();
chicken.prepare();
worms.prepare();
worms.isFresh();
chicken.isFresh();
macNCheese.aDayPasses();

// Do not edit below this line
module.exports = Food;
