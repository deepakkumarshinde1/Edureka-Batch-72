// promise => Class handel a code which may create an exception
// promise are async in nature

/** promise 
        ==> true ==> fulfilled (resolve) => then()
        ==> false ==> rejected ==> catch()

 */
// async => convert function to promise function
async function div(varOne, varTwo) {
  if (varTwo !== 0) {
    let result = varOne / varTwo;
    return result;
  } else {
    return Promise.reject("Cannot divide by zero");
  }
}

async function add(varOne, varTwo) {
  let result = varOne + varTwo;
  return result;
  // return Promise.resolve(result);
}

// async await
// await => run a promise in sequence and also provide us a resolve result
async function calculation() {
  try {
    let divResult = await div(10, 5);
    let addResult = await add(divResult, 50);
    console.log(addResult);
  } catch (error) {
    console.error(error);
  }
}
calculation();
/*div(10, 0)
  .then(function (result) {
    return add(result, 50);
  })
  .then(function (addResult) {
    console.log(addResult);
  })
  .catch(function (error) {
    console.error(error);
  });*/

// fetch() promise base API
// get some data from server in async way
