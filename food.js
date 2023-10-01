// Create class below
class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = true;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  isFresh() {
    if (this.daysToSpoil >= "0") {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil = this.daysToSpoil - 1;
    this.isFresh();
  }
}
let pineapples = new Food("Pineapple", -1);
console.log(pineapples);
console.log(pineapples.prepare());

// Do not edit below this line
module.exports = Food;
