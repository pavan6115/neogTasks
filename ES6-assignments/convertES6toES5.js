// Author : Pavan Kulkarni

```
const packIt = (...args) => console.log(args)
packIt(1,2,3,5,5)
```
// object.values - returns an array
function packIt(){
    var numbers = Object.values(arguments)
    console.log(numbers)
}
packIt(1,2,3,4,5,5,6,6)