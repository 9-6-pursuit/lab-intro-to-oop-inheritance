// Create class below
class Food {
    constructor (name, daysToSpoil) {
        this.name = name
        this.daysToSpoil = 3
        this.fresh = true
    }

    prepare() {
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        console.log(
            this.daysToSpoil > 0
            ? `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
            : `${this.name} has spoiled.`
        )
        this.fresh = this.daysToSpoil ? false : true
      }

    aDayPasses () {
        this.daysToSpoil --
        this.isFresh()
    }

   
}


module.exports = Food;