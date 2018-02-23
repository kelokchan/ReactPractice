class Person {
  constructor(name = 'Anonymous', age = 0) {    
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`; 
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;  //return if true/false
  }
  getDescription() {  //overriding
    let description = super.getDescription();
    description += this.hasMajor() ? ` He/She is studying ${this.major}.` : '';
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;  //return if true/false
  }
  getGreeting() {
    let greeting = super.getGreeting();
    greeting += this.hasHomeLocation() ? ` I'm visiting from ${this.homeLocation}` : '';
    return greeting;
  }
}

const me = new Student('Kelok Chan', 23, 'Computer Science');
console.log(me.getDescription());
const other = new Traveller();
console.log(other.getGreeting());
