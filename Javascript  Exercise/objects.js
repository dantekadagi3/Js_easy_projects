
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
//we use the bracket notation when we want to compute the property name as shown above,otherwise just use the dot notation

//another importance of using bracket notation is application of the prompt function

const interestedIn=prompt('What do you want to  know about jonas? firstName,LastName,age,job, and friends');
console.log(jonas[interestedIn]);

//adding elements in an object
jonas.location='Kenya';
console.log(jonas['location']);
jonas['twitter']='@mashy2090';

const sentence=`jonas has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`;

console.log(sentence);
