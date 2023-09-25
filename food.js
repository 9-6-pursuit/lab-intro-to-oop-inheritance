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
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }

  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

class BadFood extends Food {
  constructor(name, daysToSpoil, fresh, weapons) {
    super(name, daysToSpoil);
    this.daysToSpoil = 20;
    this.weapons = weapons || [
      {
        name: "Sprinkle Spray",
        hitPoints: 3,
      },
      {
        name: "Icing Deluge",
        hitPoints: 4,
      },
      {
        name: "Sugar Shock",
        hitPoints: 5,
      },
    ];
  }

  isFresh() {
    super.isFresh();
  }

  prepare() {
    console.log(`I am ${this.name} and my calories are too high to count!`);
  }

  fight(otherBadFood) {
    let weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
    otherBadFood.daysToSpoil -= weapon.hitPoints;
    console.log(
      `${otherBadFood.name} is down ${otherBadFood.daysToSpoil}, but I am still up ${this.daysToSpoil}`
    );
  }
}


const salmon = new Food("salmon", 4);
salmon.prepare();
salmon.isFresh();
for (let i = 0; i < 6; i++) {
  salmon.aDayPasses();
}

const hotdog = new BadFood("Hotdog");
const broccoli = new BadFood("Brocolli");
hotdog.prepare();
broccoli.prepare();

hotdog.fight(broccoli);
broccoli.fight(hotdog);

while (hotdog.daysToSpoil > 0 && broccoli.daysToSpoil > 0) {
  hotdog.fight(broccoli);
  broccoli.fight(hotdog);
}
if (hotdog.daysToSpoil > broccoli.daysToSpoil) {
  console.log(`${hotdog.name} wins!`);
} else {
  console.log(`${broccoli.name} wins!`);
}




// Do not edit below this line
module.exports = Food;
