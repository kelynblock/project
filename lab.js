console.log()

class Hamster {
    constructor(name) {
      this.owner = '';
      this.name = name;
      this.price = 15;
    }
  
    wheelRun() {
      console.log("squeak squeak");
    }
  
    eatFood() {
      console.log("nibble nibble");
    }
  
    getPrice() {
      return this.price;
    }
  }

  class Person {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.height = 0;
      this.weight = 0;
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getWeight() {
      return this.weight;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    eat() {
      this.weight++;
      this.mood++;
    }
  
    exercise() {
      this.weight--;
    }
  
    ageUp() {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
    }
  }

  // new Person
const timmy = new Person("Timmy");

// Age Timmy five years
for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}

// Timmy eating five times
for (let i = 0; i < 5; i++) {
  timmy.eat();
}

// Timmy exercise five times
for (let i = 0; i < 5; i++) {
  timmy.exercise();
}

// Age Timmy 9 more years
for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}

// Hamster named "Gus"
const gus = new Hamster("Gus");

// string "Timmy"
gus.owner = "Timmy";

// Timmy "buys" Gus
timmy.buyHamster(gus);

// Age Timmy 15 years
for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}

// Timmy eat twice
for (let i = 0; i < 2; i++) {
  timmy.eat();
}

// Timmy exercise twice
for (let i = 0; i < 2; i++) {
  timmy.exercise();
}

class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  class Chef {
    createDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
  
  // Create an instance of Chef
  const chef = new Chef();
  
  // Create three Dinners using the Chef
  const dinner1 = chef.createDinner("Salad", "Steak", "Chocolate Cake");
  const dinner2 = chef.createDinner("Soup", "Fish", "Apple Pie");
  const dinner3 = chef.createDinner("Bruschetta", "Pasta", "Tiramisu");
  
  // Log the Dinners
  console.log(dinner1);
  console.log(dinner2);
  console.log(dinner3);