const months = ["january", "february", "march"];
// console.log(months[1]);

const arr = ["rabbit", 5, true, [1, 2, 3]];
// console.log(arr[3][1]);

for (let i = 0; i < months.length; i++) {
  // console.log(months[i]);
}

for (let month of months) {
  console.log(month);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();

// fruits.push("kiwi");

// fruits.splice(2, 2);

const citrus = fruits.slice(1, 2);
console.log(citrus);
