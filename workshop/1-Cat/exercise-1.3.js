// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
class Cats {
  constructor(nameInput, breedInput) {
    this.species = "cat";
    this.name = nameInput;
    this.breed = breedInput;
    this.hungerLVL = 25;
    this.tirednessLVL = 25;
    this.lonelinessLVL = 25;
    this.happinessLVL = 25;
  }
  sleep = sleepHours => {
    this.tirednessLVL -= sleepHours * 5;
    this.happiness += sleepHours;
  };
  eat = gramsEaten => {
    this.hungerLVL -= gramsEaten / 5;
    this.happiness += gramsEaten * 2;
  };

  play = playTime => {
    this.loneliness -= playTime * 3;
    this.happiness += playTime * 5;
  };
}

let boots = new Cats("Boots", "Siamese");
boots.sleep(25);
boots.eat(5);
boots.play(6);
console.log(boots);
