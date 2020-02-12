# 2.8.1 - OOP

---

What does this program do?

```js
const createAcc = () => {
    return { sum: 0 }
}
const inc = item => { item.sum = item.sum + 1 }

let a = createAcc();
let b = createAcc();

inc(b);

console.log(a.sum);
console.log(b.sum);
```

---

## What is OOP?

- The OOP paradigm consists of structuring your code around classes
- To know OOP is to know classes _more on this soon_

also

- A way to structure your program
- Some people hardly ever use it, others use it _everywhere_.

---

## Why you should learn OOP

OOP is really good for one thing: user interface libraries.

- React
- Vue
- Angular
- Standard Android UI library
- Standard iOS UI library

But what is a user interface library? _more on that soon_

---

## What is a class?

Class is yet another type.

Wait. What other types do you know?

---

## Defining a class

```js
class Car {

}
```

---

## First Rule of classes: `new`

If Car is a class, then we can use the `new` keyword to create a new object of that type.

```js
class Car {
  … // stuff goes here
}
let myCar = new Car();
let yourCar = new Car();
```

---

## Second Rule of classes: `constructor`

`new` also calls the `constructor` of the class.

_The `this` keyword refers to the new object._

```js
class Car {
    constructor(brandName, modelName) {
        this.brand = brand || '';
        this.model = modelName || '';

    }
}

let myCar = new Car("Toyota", "Corrolla");
let yourCar = new Car("Honda");

//comes back as an object
```

---

```js
class Country {
    constructor(pop) {
        this.population = pop;
    }
}
let canada = new Country(30000);
let usa = new Country(400000);
```

---

```js
class City {
 constructor(p, n) {
     this.potholes = p;
     this.name = n;
  }
}
let montreal = new City(30000, "Montreal");
let sanFransisco = new City(3, "San Fransisco");

// What does the following output?
console.log(montreal);
console.log(sanFransisco);
```

---

## Third Rule of classes: method arrow functions

Every method arrow function of a class creates a function.
Every instance of a class has a property that matches the method name and refers to the function.

```js
class Car {
    noise = () => console.log("Vrooom");
}

let mazda = new Car();

mazda.noise();
```

---

```js
class School {
    constructor(name) {
        this.school = name;
    }

    noise = () => {
        console.log("...The sound of students growing...")
        console.log(`At ${this.school}, students are learning`)
    }
}
let concordiaBootcamps = new School('Concordia Bootcamps');

// What does the following output?
concordiaBootcamps.noise();

// What do I have to type to output the name?
concordiaBootcamps.school 

```

---

```js
class Dog {
    constructor(voice) {
        this.voice = voice || 'bark';
    }
    noise = () => {
        console.log('woof');
    }
    coolOff = () => {
        console.log('pant');
    }
}

let mastiff = new Dog();
let terrier = new Dog();
```

---

## Fourth Rule of classes

The context of the newly created functions is the newly created object.
In other words, the keyword `this` refers to the newly created object.

---

```js
class Dog {
    constructor(voice) {
        this.voice = voice;
    }
    noise = () => {
        console.log(this.voice);
    }
    coolOff = () => {
        console.log("pant ");
    }
}

let mastiff = new Dog('WOOF!');
let terrier = new Dog('yip!yip!');
```

---

```js
class Car {
    constructor() {
        this.mileage = 0;
    }
    drive = () => { this.mileage = this.mileage + 10 }
}
let myCar = new Car();
myCar.drive(); 
```
---
```js
class Car {
    constructor() {
        this.mileage = 0;
    }
    drive = (amount) => { this.mileage = this.mileage + amount || 10 //to have a default}
}
let myCar = new Car();
myCar.drive(100); 
```
---

### Exercise

```js
// 1. Given this class, how would we represent its hunger level?
// 2. How could we represent varying hunger levels based on activity?
// 3. How about when it eats?
class Animal {
    constructor(name){
        this.creature = name;
        this.hungerLVL = hunger || 0;
    }
    //when it plays, it increases the hungerLVL by 20
    play = () =>{
        this.hungerLVL += 20;
    }
    //when it eats, it decreases the hungerLVL by 30
    eat = () =>{
        this.hungerLVL -= 30;
    }
}

```

---

## Inheritance

A class can inherit from another class.

---

```js
class Human {
    constructor() {
        this.species = "Homo Sapien";
    }
    dance = () => {
        console.log("disco time");
    }
}

// Declare a class that extends Human
class Male extends Human {
    constructor(name) {
        super(); // call parent constructor to set the species
        this.name = name;
    }
    greet = () => {
        console.log("I'm " + this.name);
    }
}

// Create a bob object that is a HUMAN MALE
let bob = new Male('Bob');

//if you remove super from the contructor,
// it will run the constructor that takes the name
// accept the dance property from the Human class
// but it wont run the Human constructor, no species key
```

---

## Exercise 1

What is the output of these programs?

**See sample js files 1 to 6**

---