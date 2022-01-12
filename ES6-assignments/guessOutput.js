// Author : Pavan Kulkarni
```
1 - 
const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)
```
// Output -
// Namaste Welcome 


```
2 - 
const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj 

console.log(aloo)
```

// Output -
// We will get error as aloo has been declared