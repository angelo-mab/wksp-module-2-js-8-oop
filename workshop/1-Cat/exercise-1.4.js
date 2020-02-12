// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.
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

 wait = (waitTime) => {
  this.hungerLVL += waitTime;
  this.tirednessLVL += waitTime;
  this.lonelinessLVL += waitTime;
  this.happinessLVL -= waitime;
 }
}

let boots = new Cats("Boots", "Siamese");

boots.wait(20);
console.log(boots);


// B) Make Boots wait 20 minutes and call then console.log(boots);

boots.wait(20);
console.log(boots);