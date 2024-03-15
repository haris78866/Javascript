// array in Java script 
// array are the variable that hold multiple variable

const number =[12,3,4,5,5];

console.log(number);

const fruits=['apple','banana','grapes'];

console.log(fruits);

// arrary is 0 based
// try to used const with an array other wise we will get an array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// we can also add by using index of array 
fruits[3]='grapes';


// push is used for to add elements in the end of the array 
fruits.push('mangoes');
console.log(fruits);


// we can also unshift to add eleemnt in the beigning 
fruits.unshift('strawberry');
console.log(fruits);

// pop is used to off/remove  the last one 

fruits.pop();
console.log(fruits);


// this fun is used to check to it is right or not like here we are checking for the array 
console.log(Array.isArray(fruits));

// now here am checking for the false value 
console.log(Array.isArray('hello'));


// to find the idnexs 
console.log(fruits.indexOf('banana'));
//   //

