//here we are going to learn the difference between function declaration and function expression
//1.function declaration

function myAge(birthYear){
return 2024-birthYear;

}
const age1=myAge(2003);
console.log(age1);

//2.function expression

const calacage2=function(birthYear){
    return 2040-birthYear;
}
const age2=calacage2(2005);
console.log(age2);

/*You can call function declarations before they are defined in the code but with function expression this cannot happen*/