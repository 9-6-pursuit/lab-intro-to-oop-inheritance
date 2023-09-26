// Create class below
class Tamagotchi{
constructor(name){
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
    I am this full: ${this.full}
    My energy is: ${this.energy}
    I am ${this.sick ? "" : "not"} sick
    ********************`)
}
eat(){
    if(this.full <= 10){
        console.log(this.full += 2 , this.energy -= 1)
    }
    if(this.full > 10){
         this.sick = true
        }
}
medicate(){
    if(this.sick === true){
        console.log(this.full = 9, this.energy -= 3)
        this.sick = false
    }else if(this.sick === false){
        console.log(`refusal to take medicine`)
        this.energy--
    }
}
// - play: increases mood by 2, reduces energy and full by 1,
//   - will not play if tamagotchi is sick,
//   - if asked to play when sick, reduce mood and energy by 1
//   - will not play if mood is above 9, reduce energy by 2 and full by 1
//   - will not play if energy is less than or equal to 3
//     - console log "I am too tired to play" - reduce energy by 1

play(){
     if(this.sick === true ){
            this.mood -= 1 ,
            this.energy -= 1
        }else if(this.mood > 9){
        this.energy -=2,
        this.full -= 1
    }else if(this.energy <= 3){
        this.energy -= 1
        console.log("I am too tired to play")
    }else{
            this.mood += 2 , this.energy -= 1, this.full -= 1
    }
    }
    sleep(){
       this.energy += 4
       this.full -= 3 
    }
    timePasses(){
        if(this.sick === true ){
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        }else{
            this.mood -= 2
            this.full -= 1
            this.energy -= 1
        }
       
    }
    badGuardian(){
        if(this.energy <= 0){
            this.rehomed = true
        }
        if(this.full <= 0){
            this.rehomed = true
            }
            if(this.mood <= 0){
                this.rehomed = true
            } 
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
