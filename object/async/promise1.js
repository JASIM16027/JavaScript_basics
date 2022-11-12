const paymentSuccess = false;
const mark = 80;
// producing code or function definition
function enroll() {
  console.log("Course enrollment is in progress!");
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment Failed");
      }
    });
  });
  return promise;
}

function progress() {
  console.log("course on progress");
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (mark >= 80) {
        resolve();
      } else {
        reject("you didn't get enough mark to get the certificate ");
      }
    }, 2000);
  });

  return promise;
}

function getCertificate() {
  console.log("Preparing your certificate");
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("congrats! you got the certificate");
    }, 2000);
  });

  return promise;
}

//consuming code or function call
enroll()
  .then(progress)
  .then(getCertificate)
  .then(function(value){
      console.log(value);
  })
  .catch((err) => console.log(err));
