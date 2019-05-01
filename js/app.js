// 'use strict:'
// var sandwichName = prompt('HEY KID!!! What is your favorite sandwich?');
        
// alert(sandwichName +'? Really?? ' + sandwichName + ' is gross!!');
// // var yourName = prompt("What's your name " + sandwichName + " sandwich?");
// // alert("you're kinda creepy " + yourName + ".");
// // var favoriteDrink = prompt("Ok " + yourName + ". Along with your " + sandwichName + " sandwich, what do you like to drink?");
// // alert( favoriteDrink + "? It's hard to believe I thought we could make this work " + yourName + ". Between your preference of " + sandwichName + " sandwiches that you wash down with " + favoriteDrink + "; I'm not sure it's going to work out between us.");
// // var isItTrue = prompt("One last question..." + yourName + " of the " + sandwichName + " sandwich, who inexplicably drinks " + favoriteDrink +". Is it true what they say?"); 
// // alert("I believe you. Alas, two ships passing in the night I guess " + yourName + ". Enjoy your " + sandwichName + " sandwich and warm " + favoriteDrink + " on your long journey. To answer the question you must be asking yourself..." + isItTrue);
// // console.log ('The user said thier favorite sandwich is ' + sandwichName + '. Thier favorite drink is ' + favoriteDrink + '. Thier name is ' + yourName + '. And when asked it it were true they responded by saying "' + isItTrue + '".');               


// // I need 5 yes/no questions about myself. 
// // 1. My first job was as a butler at the Playboy Mansion. No, it was my fourth. No follow up questions, they make you sign an NDA.
// // 2. One of my courses in highschool was surf class. Yes, we met at the beach to go surfing three times a week for 0 Period for PE credit. 
// // 3. My primary motivation for attending law school was rage. Yes. 
// // 4. My dogs names are Woodford and Cider. Yes, named after my wife and I's drinks of choice.
// // 5. I 


// var createGreeting = function (username) {
//     // var hour = 21;
//     var date = new Date();
//     var hour = date.getHours()
//   // if it's noon or later, and before 5 pm, construct "Good afternoon, Stephanie"
//     if (hour > 0 && hour < 12) {
// //       var newGreeting = "Good morning, " + username + "!";
// //     } else if (hour >= 12 && hour < 17) {
// //       var newGreeting = "Good afternoon, " + username + "!";
//     } else {
//       var newGreeting = "Good night, " + username + "!";    
//     }
  
//     return newGreeting;
//   };
  
//   var greeting = createGreeting("Josh");
//   console.log(greeting); 

var surfClass = prompt('One of my courses in highschool was surf class?').toLowerCase();
if (surfClass === 'true'){
    alert ('We spent 0 period three days a week surfing before school of PE credit. #blessed');
}
else if (surfClass === 'false') {
     alert('Incorrect! My childhood was basically an episode of the OC, which they largely filmed in my hometown of Hermosa Beach, CA');
}
else {
     surfClass= alert('must return either TRUE, or FALSE');
     prompt('One of my courses in highschool was surf class?');
}
console.log ('User believes that is ' + surfClass + ' that I had surf class in high school' )

// var dogNames = prompt('My wife and I named our dogs after our preferred alocoholic beverages?').toLowerCase();
// if (dogNames === 'true'){
//     alert ('We spent 0 period three days a week surfing before school of PE credit. #blessed');
// }
// else if (surfClass === 'no') {
//      alert('Incorrect! My childhood was basically an episode of the OC, which they largely filmed in my hometown of Hermosa Beach, CA');
// }
// else {
//      surfClass= alert('must return either YES, or NO');





//  else {'must return an answer of \'\true'\'\false'\'\yes'\'\no'}