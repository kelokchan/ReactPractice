var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// cant redefine let
let nameLet = 'Jen';
nameLet = 'Jen';
console.log('nameLet', nameLet);

// cant redefine and reassign const
const nameConst = 'Chan';
console.log('nameConst', nameConst);

// Block level scope
function getPetName() {
  const petName = 'Hal';
  return petName;
}

// Completely different petName
const petName = getPetName();
console.log(petName);