// Create class below
class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(`the ${this.name} is being prepared`);
  }

  isFresh() {
    this.daysToSpoil
      ? `There are ${this.daysToSpoil} days left before ${this.name} spoils`
      : `${this.name} has spoiled.`;

      if(this.daysToSpoil === 0){
        this.fresh = false
      }
  }

  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh
  }
}

// Do not edit below this line
module.exports = Food;
