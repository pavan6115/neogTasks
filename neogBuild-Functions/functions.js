// Author : Pavan Kulkarni

// Easy Section - 

```
1 - 
Given a and b, your function should return the value of ab
Example:
Input: power(2,3) ––> Output: 8
```
const power = (a,b) => a**b;
power(2,3) // 8


```
2 -
Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80
```
const areaofHeax = c => 2.598 * c;
areaofHeax(10) // 25.98


```
3 -
Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3
```
const noOfWords = char => char.split(' ').length
noOfWords('We are neoGrammers') // 3


```
4 -
Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript)
```
function findMin(...args){
    return Math.min(...args)
}
findMin(3,5,6,1)  //1


```
5 - 
Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript)
```
function findMax(...args){
    return Math.max(...args)
}
findMax(3,4,6,1)  //6


```
6 -
Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
```
const typeOfTriangle = (a,b,c) => {
    if (a === b && b === c) return `Equilateral Triangle`
    else if (a === b || b === c || a === c) return `Isosceles Triangle`
    else return `Scalene Triangle`
}
typeOfTriangle(30,90,30)  //Isoceles Triangle



// Medium Section -

```
1 - 
Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5
```
const arrayLength = arr => arr.length
arrayLength([3,3,4,2,4,2])  // 6


```
2 -
Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
```
const calIndex = (arr, element) => console.log(indexOf(element))
calIndex([1,6,3,5,8,9], 3)  // 2


```
3 -
Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
```
const replace = (arr, n1, n2) => {
    console.log('Before - ',arr)
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == n1) arr[i] = n2
    }
    console.log('After - ',arr)
}
replace([1,5,3,5,6,8], 5, 10) // Before -  [ 1, 5, 3, 5, 6, 8] After -  [ 1, 10, 3, 10, 6, 8 ]


```
4 -
Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
```
const mergeArray = (arr1, arr2) => console.log([...arr1, ...arr2])
mergeArray([1,3,5], [2,4,6])  // [1,3,5,2,4,6]


```
5 -

```