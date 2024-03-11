// oop in JS 


// constructer function  (parameteized constructer)
function person (firstname,lastname,dob){
this.firstname=firstname;
this.lastname=lastname;
this.dob=dob;
}


//instantiate object 
const person1=new person('haris','arain','29-10-2003');
const person2=new person('ali','arain','29-10-2003');
const person3=new person('umer','arain','29-10-2003');

// showing all the data
console.log(person1);
console.log(person2);
console.log(person3);

// if we need only dob or name only 
console.log(person1.firstname);
console.log(person1.dob);

