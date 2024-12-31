// console.log('hello world');

function greeting (name) {
    console.log("Hi!", name);
}

const name = "kucing";
// greeting(name);

function add(a, b) {
    console.log(a + b);
}

// add(3, 6);

const age = 5;

function person() {
    console.log("inside", age);
}

// person();

// console.log("outside", age);

const firstName = "jerapah";
// console.log(firstName.toUpperCase());

const number = 45;
const numString = number.toString();
// console.log(typeof numString);

let grade = 90;

const result = grade > 70 ? "pass" : "fail";
console.log(`you ${result} the exam`);