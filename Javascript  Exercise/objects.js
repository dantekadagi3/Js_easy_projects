
//object literal syntax
//objects are used to group together variables of diffrent data types that belong together
//the order of retrival of items in objects does not matter in objects like in arrays where items are indexed
const jonas={
    firstName:'Jonas',
    lastName:'Schmedtman',
    job:'Teacher',
    friends:['jade','june','Miranda']
};

//How to get data from an object
//Dot vs bracket notation
const mandi={
    firstName:'Mandi',
    lastName:'Schmedtman',
    job:'Teacher',
    friends:['jade','june','Miranda']
};
//dot notation
console.log(mandi.lastName);
//bracket notation
console.log(jonas['lastName']);
const name='Name';
console.log(jonas['first' +name]);
