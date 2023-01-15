// javascript run on one thread => main thread
// by default sync
// What is sync => blocking
// What is async => Non Blocking
// From sync to async => Event Loop API (object, function)
// Event Loop (Event Queue)
/**
 * DOM , setInterval, setTimeOut, promises, async await , xhr , fetch
 */
console.log("log-1");

for (let index = 0; index < 3000; index++) {
  console.log("log-2");
}

console.log("log-3");

// still js js once fastest prog lag world ==> Event Loop
