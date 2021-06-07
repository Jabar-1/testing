// let num = 1234;
// let num2 = 1234;

// if (num % num2) {
    // % means remainders. 
// console.log("true");
// } else {
// console.log("false");
// }

// if (1 === "1") {
//     // === means strictly equal too, meanig same data type
//     console.log(true);
//     }
//     else {
//     console.log(false);
//     }

// let place = "Manc";
// let weather = "Cloudy";
// if (place == "Manc" && weather == "Sunny") {
// console.log("Check again");
// // is place and weather are equals to the variables then is statement is true
// // but the if statement will be false because weather does not equal cloudy.
// }
// else if (place == "Manc" && weather == "Rain") {
// console.log("Obvs");
// // this will be false because weather is equal to rain
// }
// else {
// console.log("What it isn't raining?");
// // this will be the default if everything is false
// }

// let day = "monday";

// if (day == "saturday" || day == "sunday"){
//     console.log("its the weekend");
//     // || stand for or, so if the veriable is saturday or sunday it would be true. 
// }
// else {
//     console.log("its not the weekend");
//     // if the statement is false this console will happen 
// }

// let car = "Peugeot";

// if(car == "Ford" || car == "GM"){
// console.log("You've got an American car!");
// }
// else if(car == "Peugeot" || car == "Citroen"){
// console.log("You've got a French boy!");
// }
// else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
// console.log("Japanese cars are dead quiet!");
// }
// else if(car == "Mercedes"){
// console.log("You are proper posh German!");
// }
// else if(car == "Volkswagen"){
// console.log("German aren't that bad at all!");
// }
// else if(car == "Hyundai" || car == "Kia"){
// console.log("South Korean cars are getting popular!");
// }
// else{
// console.log("Your car is not in the top ten companies in the world!");
// }

// let grade = "39";

// switch (true){
//     case grade >= 70:
//         console.log("Distinction");
//         break;
    
//     case grade >= 60:
//         console.log("Merit");
//         break;
    
//     case grade >= 40:
//         console.log("Pass");
//         break;

//     default:
//         console.log("Fail");
// }

// let age = 18;

// if (age >= 18){
//     console.log("yes i can serve you");
// }
// else {
//     // nothing should be next to else
//     console.log("no i cant serve you");
// }
    
// let age = 18;
// let counrty = "us";

// if (age >= 18 && counrty == "uk"){
//     console.log(" Yes you can get severed in the uk");
// }
// else {
//     console.log("no you cant get severed in the uk");
// }

// let topping = "sweetcorn";

// switch (topping){
//        case "cheese":
//        case "tomatoes":
//        case ""

// }

// let topping = "meatball";

// switch (topping) {
// case "pineapple":
// case "ham":
// case "cheese":
// console.log("These are important ingredients for my pizza.");
// break;
// case "sausage":
// case "onions":
// console.log(`I don’t mind having ${topping} on my pizza.`);
// break;
// default:
// console.log (`I do not like ${topping} pizza.`);
// }

// let password = 'MillionairesOnly';

// if (password.length <= 8){
// console.log("great password");
// }
// else{
//     console.log("your password is not suffieanct");
// }



// let num = 15;

// if(num % 3 == 0 && num % 5 == 0 ){

//     console.log("this number can be divided by 3 or 5")
// }
// else{

//     console.log("please choose a number that can be divied by 3 or 5")
// }

// let num = 50;
// switch(num){
// case num % 5 == 0:
// case num % 3 == 0:
// console.log("It's divisible");
// break;
// case num % 5 != 0:
// case num % 3 != 0:
// console.log("Non-devisible");
// break;
// }

// let num = 15;

// switch (true){
//    case num % 3 == 0 && num % 5 == 0:
//         console.log("fizz buzz");
//    break;
   
//    case num % 3 == 0:
//        console.log("fizz");
//    break;
   
//    case num % 5 == 0:
//         console.log("buzz");
//    break;
   
   
//    default:
//        console.log("this number cannot be divided by 3 or 5");
// }

let time = 8;
let placeOfWork = "im at work";
let townOfHome = "im at home";

switch(true){
    
    case time >= 9:
        console.log(`${placeOfWork}`);
        break;
    
    case time <= 7:
         console.log(`${townOfHome}`);
         break;
     
    default:
        console.log("im commuting");
}

