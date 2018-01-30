const add = (a, b) => {
  // console.log(arguments); arguments no longer accessible using arrow func
  return a + b;
}

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: 'Kelok',
  cities: ['KL', 'PJ', 'Puchong'],
  printPlacesLived() {
    // this.name throws error because it is not bound within the func
    // const that = this; <-- workaround
    // this.cities.forEach(function (city) {
    //   console.log(this.name + ' has lived in ' + city);
    // });

    // with arrow func, this.name will work
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);      
    });

    // map allows the loop variable to change
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
}

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());