function orderPizza(callback) {
  console.log("Ordering pizza...");

  // Simulating an API request
  setTimeout(() => {
    console.log("Pizza is ready!");
    const pizza = "Pepperoni Pizza";
    callback(pizza); // Call the callback and pass the pizza
  }, 3000); // delay 3 detik
}

function handlePizza(pizza) {
  console.log(`Eat ${pizza}!`); // Handle the pizza here
}

function prepareDrinks() {
  console.log("Meanwhile, prepare drinks.");
}

// Using the function
orderPizza(handlePizza); // Pass the pizza-handling function as a parameter
prepareDrinks(); // Runs while waiting for the pizza
