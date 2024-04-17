// function in the JS 

function addnum(num1,num2){
    console.log(num1+num2);
}

/// calling the function 
addnum(3,4);

// we can also do with return 
function addnum(num1,num2){
    return num1+num2;
}

console.log(addnum(5,5));


// we can alse  intialize the value in the function 
function addnum(num1=2,num2=1){
    return num1+num2;
}

console.log(addnum);


// we can also do without return 
const addnum = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addnum(4, 4));
//