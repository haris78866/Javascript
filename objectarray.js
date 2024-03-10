// Array of objects
const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Take out trash',
      isCompleted: true
    },
    {
      id: 3,
      text: 'Take out trash',
      isCompleted: false
    },
  ];
  
  console.log(todos);

// if we just want to print the text or id  property 
console.log(todos[1].id);
console.log(todos[1].text);

// json is  data formta for full satck development  ,APIs project
// we we send something to data server then we use json format
// it is commonly used for data exchange between a server and a webpage 




// if we need a JSON string 
const todoJSON =JSON.stringify(todos);

console.log(todoJSON);
