//An arrow function is a shorter form of a function expression that is shorter and easier to write
//with arrow functions the return value is returned implicitly without you having to use the return key word
const age3=birthYear=>2037-birthYear;
const calcage3=age3(1999);
console.log(age3);


//Example2
const yearsUntilRetirement=(birthYear,firstName)=>{
    const age=2037-birthYear;
    const retirement=65-age;
    return `${firstName} Retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991,'jude'));

//Arrow functions do not get the advantage of using the this keyword;