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

// oop i.e class
// C = proceeder OP
// oop => JAVA , Python , C++, php
// oop => language operation operates like real life event
// object => Instance Of Class
/** What is a class ?
 * Its Blueprint of Object
 * Class is a collection of props and method
 * Where prop are like variables methods are like function
 *
 * JS is a object base programing language
 * function , jsObject, array Object
 */

// overriding function
// function alert(){}
//alert(1); // core function

class A {
  text = "";
  constructor(data) {
    this.text = data;
  }

  alert() {
    console.log(this.text);
  }
}

// as soon as we create object of class a constructor is invoke
// in side a class if i want to access prop & method we need to use "this" keyword

// object

let a = new A("edureka"); //A() => external constructor

//let restaurant = new RestaurantManager();
// restaurant => object
//restaurant.printRestaurantName();

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name, "is running and age is ", this.age);
  }
}

let childOne = new Human("aadvik", 20);
console.log(childOne);
childOne.running();

let childTwo = new Human("pooja", 19);
childTwo.running();

///////

let list = [
  {
    name: "Green Cafe",
    location: "Pune",
  },
  {
    name: "KFC",
    location: "Pune",
  },
  {
    name: "Hotel Saiba",
    location: "Mumbai",
  },
  {
    name: "Hotel EverGreen",
    location: "Jaipur",
  },
];

class RestaurantManager {
  constructor(list) {
    this.restaurantList = list;
  }

  filterRestaurantByCity(city) {
    let search_result = this.restaurantList.filter(function (value, index) {
      return city === value.location;
    });

    console.log(search_result);
  }
}

let restaurant = new RestaurantManager(list);
restaurant.filterRestaurantByCity("Kanpur");
