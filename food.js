// Create class below

class Food {
    constructor(name, daysToSpoil, fresh=true){
        this.name=name;
        this.daysToSpoil=daysToSpoil;
        this.fresh=fresh
    }

    prepare(name){
        console.log(`${name} is being prepared`)
    }

    isFresh(daysToSpoil, name){
        if(daysToSpoil<1){
            console.log(`${name} has spoiled.`)
        } else {
        console.log(`There are ${daysToSpoil} days left before ${name} spoils.`)
        }
    }

    aDayPasses(){

    }
}

// Do not edit below this line
module.exports = Food;
