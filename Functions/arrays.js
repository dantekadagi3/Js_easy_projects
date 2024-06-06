//i am excited to learn all about arrays in js
const friends=['mike','jane','ana'];
console.log(friends);

//Another way of declaring an array
const years =new Array (1991,1984,2008,2020);

//logging elements of an array 
console.log(friends[0]);
//finding the length of an array
console.log(friends.length);
//To get the index of the last element in the array
console.log(friends[friends.length-1]);

//adding and removing elements in array
friends[2]='jay';
friends[3]='manoi';
console.log(friends);

//array methods
//they include push which adds elements to the end of the array
//unshift methods which adds elements at the beginning of the array
//pop which removes the last element of the array
//shift method is used to remove the first element in an array

const cars=['mazda','mercedes','buggatti','BMW'];
cars.push('Rangerover');
cars.unshift('juk');//adding elements at the
console.log(cars);
//removing elements;
cars.pop();
cars.shift();
console.log(cars);

//method that tells as the position or index of an element in an array
console.log(cars.indexOf('mercedes'));
//Es6 method of finding an element in an array
console.log(cars.includes('mazda'));