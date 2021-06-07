// let age = 18;

// if (age < 18){

//     console.log("Your ticket will be £8");
// }
// else if(age >= 18 && age <= 60){

//     console.log("Your ticket will be £10.95");
// }
// else{
//     console.log("Your ticket will be £7.50");
// }


// let coffeeIsGrinding = true 

// const pressGrindBeans = () => {

//     console.log(" Grind the beans for 20 seconds");
//  }

// pressGrindBeans();


// let accnum = 50449921;
// let amount = 304;

// const cashWithdrawal = (amount, accnum) => {
    
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
//     }
    
//     cashWithdrawal(304, 50449921);
//     cashWithdrawal(30, 50449921);
//     cashWithdrawal(200, 50447921);

// let accnum = 50449921
// let amount = 50

// const cashWithdrawal = (amount, accnum) => {
// console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(amount, accnum);

// accnum = 30990031
// amount = 35
// cashWithdrawal(amount, accnum);

// accnum = 99902928
// amount = 250
// cashWithdrawal(amount, accnum);


// let bool = true;

// if(bool){
// console.log("True");
// } else {
// console.log("False");
// }

// let total;

// const addUp = (num1, num2) =>{

//     return num1 * num2; 

// }

// total = addUp(26,10)
// console.log(total)
// console.log(addUp(2,5));


// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };
    
// console.log("The temperature is " + getFahrenheit(15) + "°F");

// // Output: The temperature is 59°F

// function square (number){
//      return number * number;
//  };
//  console.log(square) 
//  square = (5);

 
// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;    
//     } else {
//         return (n * factorial(n-1));    
//     }
// }
// console.log(factorial(33));

// let orderCount = 0;
// const takeOrder = (topping1, topping2) => {
// console.log(`Pizza with ${topping1} and ${topping2}`);
// orderCount += 1;
// }
// takeOrder("pineapple", "quorn");
// console.log(orderCount);


const moneyOnAccount = 4600;
const pin = 1234;

let amountToWithdraw = window.prompt("How much money do you want?");
let userPin = window.prompt("Pass me your PIN");

const withdrawCash = () => {
if (moneyOnAccount >= amountToWithdraw) {
if (userPin === pin) {
console.log("Wait a sec for your money!")
}
else {
console.log("The operation was unsuccessful")
}
}
};

withdrawCash();

if ((grid[0][0] == "x" && grid[0][1] == "x" && grid[0][2] == "x") || (grid[0][0] == "o" && grid[0][1] == "o" && grid[0][2] == "o")){
    console.log("WINNER WINNER!");
    }