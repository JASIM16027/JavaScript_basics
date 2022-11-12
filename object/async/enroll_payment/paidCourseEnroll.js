let paymentSuccess = true;
let mark = 70;

function enroll(callback){
    console.log("Enroll is in progress");
    setTimeout(function(){
        if (paymentSuccess){
            callback();

        }
        else{
            console.log("Payment failed");
        }
    },2000);
}


function progress(callback){
    console.log("course on progress");
    setTimeout(function(){

        if(mark>=80){
            callback()
        }
        else{
            console.log("you didn't get enough mark to get the certificate ");
        }
    },2000)
}

function getCertificate(){
    console.log("preparing your certificate");
    setTimeout(function(){
        console.log("congrats!. you got the certificate ");

    },2000);
}
enroll(function(){
    progress(getCertificate);
});
