// object literals

const person = {
    firstname: 'haris',
    lastname: 'shahzad',
    age : 30,
    hobbies:['fottbal','games'],
    address:   {
        street: 7,
        city : 'pwr',


    }

}

console.log(person);


// if we meed only hoobies   from the person clases
console.log(person.hobbies);

// if we need only city or name  from the peroson clases 
console.log(person.firstname);
console.log(person.address.city );

// we can also add something to the class by using this 
person.email='haris151@gmail.com';
console.log(person);

