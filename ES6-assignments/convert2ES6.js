// Author : Pavan Kulkarni

```
1 - 
var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);
```
// var to const
const aloo = 1;
if (aloo == 1){
    const a = 2;
    console.log(a);
}
console.log(aloo)


```
2 - 
var multiply = function(x, y) {
    return x * y;
};
```
// arrow function
const multiply = (x,y) => x * y


```
3 - 
var customer = {
    name: "Bhaalo"
  };
  var card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
  };
  var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"
```
// String template literals
const customer = {
    name : 'Bhaalo'
}

const card = {
    amount : 20,
    product : 'Aaalo',
    unitPrice : 50
}

const message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitPrice} per piece`


```
4 - 
var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2];
```
// Array Destructuring
const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]
const [CEO, ,Mentor] = Neog


```
5 - 
var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname);
```
// Array Destructuring
const arr = ['MA', 'TA', 'PA', 'CA']
const [firstName, surName] = arr
console.log(firstName)
console.log(surName)


```
6 - 
var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};
```
// Shorthand Object 
const Aaloo = 'Tasty'
const Bhaloo = 'Cute'
const obj = {
    Aaloo, Bhaloo
}


```
7 - 
var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));
```
// String Template Literals
const a = 5
const b = 10
console.log(`Fifteen is ${ a + b } and not ${2 * a + b}.`)


```
8 - 
var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
};
```
// arrow functions 
const arithmeticsObj = {
    sum : (n1, n2) => n1 + n2,
    multiply : (n1, n2) => n1 * n2
}


```
9 - 
var avengers = {
    operation: "Assemble",
    members: [
      {
        ironMan: "Tony Stark"
      },
      {
        captainAmerica: "Steve Rogers"
      },
      {
        blackWidow: "Natasha Romanoff"
      }
    ]
  };
  var operation = avengers.operation,
    members = avengers.members;
```
const avengers = {
    operation: "Assemble",
    members: [
      {
        ironMan: "Tony Stark"
      },
      {
        captainAmerica: "Steve Rogers"
      },
      {
        blackWidow: "Natasha Romanoff"
      }
    ]
}

const {operation, members} = avengers

