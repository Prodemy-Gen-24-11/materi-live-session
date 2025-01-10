function orderPizza() {
    return new Promise((resolve, reject) => {
      console.log("Ordering pizza...");
  
      // Simulating API request
      setTimeout(() => {
        let pizzaReady = false; 
  
        if (pizzaReady) {
          resolve("Your pizza is ready!"); // Success
        } else {
          reject("Sorry, we ran out of ingredients."); // Failure
        }
      }, 3000); // delay 3 detik
    });
  }
  
  function prepareDrinks() {
    console.log("Meanwhile, prepare drinks.");
  }
  
  // Using the promise
  orderPizza()
    .then((message) => {
      console.log(message); // Handle success
    })
    .catch((error) => {
      console.log(error); // Handle failure
    });
  
  prepareDrinks(); // Runs while waiting for the pizza
  