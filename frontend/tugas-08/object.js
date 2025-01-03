const person = {
  firstName: "mawar",
  lastName: "biru",
  age: 10,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  editAge: function (newAge) {
    this.age = newAge;
  },
};

// console.log(person.fullName());

person.editAge(15);
console.log(person.age);

// const cat = {};
// cat.name = "oreo";

// console.log(cat);

// const food = new Object();
// food.name = "nasi goreng";
// console.log(food);

const animals = [
  {
    name: "Horse",
    numOfLegs: 4,
    gaveBirth: true,
  },
  {
    name: "Chicken",
    numOfLegs: 2,
    gaveBirth: false,
  },
];

const newAnimal = {
  name: "Cat",
  numOfLegs: 4,
  gaveBirth: true,
};

animals.push(newAnimal);

animals.forEach((animal) => {
  animal["isMamal"] = true;
  if (!animal.gaveBirth) {
    animal["isMamal"] = false;
  }
});

// console.log(animals);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combArr = [...arr1, ...arr2];
// console.log(combArr);

const obj1 = {
  name: "a",
};

const obj2 = {
  age: 10,
};

const combObj = { ...obj1, ...obj2 };
// console.log(combObj);

const cars = ["volvo", "audi", "mustang"];
// console.log(cars[0]);
// console.log(cars[1]);

const [, car2] = cars;
console.log(car2);

const { firstName, lastName } = person;
console.log(firstName);

const cat = {
  name: "oreo",
  age: 5,
  //   characteristic: {
  //     color: "white",
  //   },
};

console.log(cat?.characteristic?.color);

let a = "kucing";
let b = a;
b = "anjing";

// console.log("a", a);
// console.log("b", b);

const cat1 = {
  name: "oreo",
  age: 5,
};

const cat2 = cat1;
cat2.name = "mochi";
console.log("cat1", cat1);
console.log("cat2", cat2);
