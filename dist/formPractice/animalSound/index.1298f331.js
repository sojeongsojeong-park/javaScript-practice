class Animal {
    constructor(name, species, age){
        this.name = name;
        this.species = species;
        this.age = age;
    }
    saying() {
        return console.log(`Hello, I'm ${this.name}!`);
    }
}
class Dog extends Animal {
    constructor(name, species, age){
        super(name, species, age);
    }
}
const mini = new Animal("mini", "mouse", 3);
mini.saying();

//# sourceMappingURL=index.1298f331.js.map
