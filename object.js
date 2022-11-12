// let ob = new Object();
// console.log(ob, typeof ob);

// let student = {
//     name:"Jasim Uddin",
//     email:"jasimcse27@gmail.com",
//     university:"MBSTU",
//     student_id:16027,
//     "like birds": true
// }
// delete student.student_id;
// console.log(student.name);
// console.log(student.email);
// console.log(student.student_id);
// console.log(student["like birds"]);
// n = 50;
// console.log(n);

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = {}; // the new empty object
  
//   // let's copy all user properties into it
//   for (let key in user) {
//     clone[key] = user[key];
//   }
  
//   // now clone is a fully independent object with the same content
//   clone.name = "Pete"; // changed the data in it
  
//   console.log( user.name );
//   console.log(clone.name);
//   console.log(user==clone);

  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  console.log( user.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user.sizes.width = 60;    // change a property from one place
  console.log(clone.sizes.width); // 60, get the result from the other one
  user.name = "Jasim Uddin";
  console.log(clone,user);

  //deep cloning or structured cloning
  let clone1 = structuredClone(user);
  user.sizes.width = 100;

  console.log(user, clone1);

// circular reference
let user1 = {};
user1.me = user1;
console.log(user1.me==user1,user1);
let clone2 = structuredClone(user1);
console.log(clone2.me===clone2);
