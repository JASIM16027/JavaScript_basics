const status =true;

console.log("Completed Task1")
// promise definition or producing code

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(status){
            resolve("Completed Task2");
        }
        else{
            reject("Task2 failed");
        }
    },2000);
});

// promise call or consuming code
promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    });

console.log("Completed Task3")