// function satement
// function smile(){
//     return"Happy Birthday";
// }

// let Birthday = smile;
// console.log(Birthday());
// console.log(smile());

// both function Statement and function declaration are same thing

function a(){
    console.log("This is function statement.");
}

a();

// function expression

let b = function(){
    console.log("this is function expression");
}

b();

//anonymous function--does not have it's own identity

// function(){

// }

// Name function expression

// let c = function fun(){
//     console.log("This is named Function expression");
// }

let fun = function(parm){
    return function(){};
}

console.log(fun());

// Function is first class citizen.
// first class Functions-Ability to be used like values
