/*** var , let , const
 * let keyword allows initialization only once.
 * let keyword is a block scope
 * var keyword is function scope
 * const keyword allows only once initialization and value assign
 */

let text = "edureka"; // global

const pie = 3.14;

text = "this is es6";
console.log(text);

function abc() {
  let a = "abc";
  for (let i = 1; i < 2; i++) {
    console.log(i);
  } // for is close
  console.log(i); // 1,2,null, undefined,error
}

// abc();
