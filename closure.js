// closures

function f(){
    for(var i=1;i<=10;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000)
        }
    
        close(i);
    }
    
    
}

f();