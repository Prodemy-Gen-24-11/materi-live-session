function runInPark() {
  setTimeout(() => {
    console.log("running");
  }, 3000);
}

function walkAtHome() {
  setTimeout(() => {
    console.log("walking");
  }, 2000);
}

runInPark();
walkAtHome();
