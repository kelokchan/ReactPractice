function square(x) {
    return x * x;
}

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

const squareArrow = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstName = (fullName) => fullName.split(' ')[0];