// Create class below

/* 
- Attributes
  - name: string
  - energy: number, default value 9
  - full: number, default value 8
  - mood: number, default value 6
  - sick: boolean, default false
  - rehomed: boolean, default false
- Methods

  - greet: Tamagotchi console logs `Hello, I'm <name>!`
  - status: Tamogotchi console logs energy, full, mood, and sick values (see below for sample message)
  - eat: increases fullness by two, decreases energy by 1,
    - if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)

- medicate:
  - if tamagotchi is sick - set full to 9 - decrease energy by 3
  - if tamagotchi is not sick
    - console log refusal to take medicine
      - reduce energy by 1
- play: increases mood by 2, reduces energy and full by 1,
  - will not play if tamagotchi is sick,
  - if asked to play when sick, reduce mood and energy by 1
  - will not play if mood is above 9, reduce energy by 2 and full by 1
  - will not play if energy is less than or equal to 3
    - console log "I am too tired to play" - reduce energy by 1
- sleep:
  - increases energy by 4 and decreases full by 3
- timePasses:
  - if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1
    -if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
- badGuardian
  - logs a message that the tamagotchi has been rehomed
  - if energy is less than or equal to 0, set rehomed to true
  - if mood is less than or equal to 0 set rehomed to true
  - if full is less than or equal to true set rehomed to true
*/

// Attributes
class Tamagotchi{
    constructor (name) {
        this.name = name
        this.energy = 9
        this.full = 8
        this.mood = 6
        this.sick = false
        this.rehomed = false
    }

    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }

    status(){
        console.log(`********************
My mood is: ${this.mood}
I am full: ${this.full}
My energy is: ${this.energy}
I am ${this.sick ? "" : "not"} sick
        ********************`)
    }
    
    eat (){
        this.full += 2
        this.energy -=1
        if (this.full > 10){
            this.sick = true
        }
    }

    medicate(){
        if (this.sick){
            this.full = 9
            this.energy -= 3
            this.sick = false
        }

        else{
            console.log(`refusal to take medicine`)
            this.energy --;
        }
    }

    play (){
        if (this.sick){
            this.mood--
            this.energy--
        }

        else if (this.mood > 9){
            this.energy -=2
            this.full --
        }

        else if(this.energy <= 3){

            console.log("I am too tired to play")
            this.energy -- 
        }

        else{
            this.mood += 2
            this.energy --
            this.full --
        }
    }

    sleep(){
        this.energy += 4
        this.full -= 3
    }

    timePasses(){
        if (!this.sick){
            this.mood -= 2
            this.full --
            this.energy --
        }
        else{
            this.mood -= 3
            this.full -= 2
            this.energy -=2
        }
    }

    badGuardian(){
        console.log(`tamagotchi has been rehomed`)

        if (this.energy <= 0){
            this.rehomed = true
        }

        if (this.mood <= 0){
            this.rehomed = true
        }

        if (this.full <= true){
            this.rehomed = true
        }
    }

}

const zeus = new Tamagotchi ("Zeus")
console.log(zeus.name)
zeus.greet()
zeus.status()
zeus.play()
zeus.status()

// Do not edit below this line
module.exports = Tamagotchi;
