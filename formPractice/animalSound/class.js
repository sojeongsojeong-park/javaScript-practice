class Animal {
 
  constructor(name, species, age, color){
    this.name = name;
    this.species = species;
    this.age = age;
    this.color = color;
  }
  introduce(){
    return console.log(`Hello, I'm ${this.name}!`)
  }
}

class Dog extends Animal{
  constructor(name, species, age, color){
    super(name, species, age, color);
  }
  saying(){
    if(!this.age){
      return console.log(`🐶 ${this.name}(Guess how old I am!)
      BOWWOW!`)
    } else{ return console.log(`🐶 ${this.name}(${this.age} years old)
    BOWWOW!`)}
  }
  color(){
    return console.log(`I'm ${this.color} dog🕶`)
  }
}
class Cat extends Animal{
  constructor(name, species, age, color){
    super(name, species, age, color);
  }
  saying(){
    if(!this.age){
      return console.log(`🐱 ${this.name}(Guess how old I am!)
      MEOW~`)
    } else{console.log(`🐱 ${this.name}(${this.age} years old)
    MEOW~`)}
  }
  color(){
    return console.log(`I'm ${this.color} cat🕶`)
  }
}
class Mouse extends Animal{
  constructor(name, species, age, color){
    super(name, species, age, color);
  }
  color(){
    return console.log(`I'm ${this.color} mouse🕶`)
  }
  saying(){
    if(!this.age){
      return console.log(`🐭 ${this.name}(Guess how old I am!)
      squeak squeak!`)
    } else{console.log(`🐭 ${this.name}(${this.age} years old)
    squeak squeak!`)}
  }
}

export { Animal, Dog, Cat, Mouse}
