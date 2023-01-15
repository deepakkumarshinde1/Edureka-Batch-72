let btn = document.querySelector("#getData");
let elTitle = document.querySelector("#productName");
let elImage = document.querySelector("#productImage");

btn.addEventListener("click", async function (event) {
  let product = 1;
  let response = await fetch(`https://fakestoreapi.com/products/${product}`);
  let result = await response.json();
  //   console.log(typeof result);
  //   result = JSON.parse(result);
  //   console.log(typeof result);
  elTitle.innerHTML = result.title;
  elImage.src = result.image;
});
// response.json(); method of fetch api response

// JSON.parse() =>string type JSON To Pure JSON

// Hoisting
// LocalStorage (React JS)

// backend team
// react

let inputText = document.querySelector("#inputText");

inputText.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    alert("Enter is pressed");
    inputText.value = "";
  }
});
