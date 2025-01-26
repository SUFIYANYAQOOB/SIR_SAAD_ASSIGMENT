// task 1
// var name = prompt("Enter your name:");
// alert(`Hello, ${name}! Welcome!`);

// task 2
// var user = prompt("Enter your city name"); 
// var karachi = "karachi"; 

// if (user === karachi) { 
//     alert("Welcome to the city of light!");
// } else {
//     alert("Welcome to " + user); 
// }

// task 3
// var gender = prompt("Please enter your gender (male/female):");
// if (gender === "male") {
//     alert("Good Morning Sir.");
//     } else if (gender === "female") {
//         alert("Good Morning Ma’am.");
//     } else {
//     alert("Invalid input. Please enter male or female.");
//     }
    
// task 5
// var maxAge = parseInt(prompt("Enter the maximum age:"));
        
// var currentAge = parseInt(prompt("Enter your current age:"));

// if (currentAge <= maxAge) {
//     alert("You are welcome!");
// } else {
//     alert("Sorry, you do not meet the age requirement.");
// }

// task 6
// var fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("Fuel level is sufficient");
// }

// task 7
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if (c === 14){
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }

// if ("car" < "cat"){
//     alert("car is smaller than cat");
// }


// task 8
// var name = prompt("enter your name");
// var english = +prompt("enter your english mark");
// var urdu = +prompt("enter your urdu mark");
// var math = +prompt("enter your math mark");

// var total = english + urdu + math;
// var percentage = (total / 500) * 100;
 
// if (english > 100 || urdu > 100 || math > 100 ||
//     english < 0 || urdu < 0 || math < 0
// ){
//     alert ("please correct mark");
// }
// else if(english >= 89 || urdu >= 89 || math >= 89){
//     alert("grade is A+1" + total + percentage + name);
// }
// else if(english >= 69 || urdu >= 69 || math >= 69){
//     alert("grade is b:" + "your mark "+total +"your percentage"+ percentage + name);
// }

// task 9
//     var item1Name = prompt("Enter the name of item 1:");
//     var item2Name = prompt("Enter the name of item 2:");
        
//     var item1Price = parseFloat(prompt(`Enter the price of ${item1Name} (in PKR):`));
//     var item2Price = parseFloat(prompt(`Enter the price of ${item2Name} (in PKR):`));
        
//     var item1Quantity = parseInt(prompt(`Enter the quantity of ${item1Name}:`));
//     var item2Quantity = parseInt(prompt(`Enter the quantity of ${item2Name}:`));
        
//     var shippingCharges = parseFloat(prompt("Enter the shipping charges (in PKR):"));

//     var item1Total = item1Price * item1Quantity;
//     var item2Total = item2Price * item2Quantity;
//     var subtotal = item1Total + item2Total;
//     var totalCost = subtotal + shippingCharges;

//     var discount = 0;
//     if (totalCost > 2000) {
//     discount = 0.1 * subtotal; // 10% discount on subtotal
//     totalCost -= discount;
//     }

//     document.write(`<div class="receipt">
//         <h2>Receipt</h2>
//         <p><strong>Item 1:</strong> ${item1Name} - ${item1Quantity} @ ${item1Price} PKR each = ${item1Total.toFixed(2)} PKR</p>
//         <p><strong>Item 2:</strong> ${item2Name} - ${item2Quantity} @ ${item2Price} PKR each = ${item2Total.toFixed(2)} PKR</p>
//         <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)} PKR</p>
//         <p><strong>Shipping Charges:</strong> ${shippingCharges.toFixed(2)} PKR</p>
//         ${discount > 0 ? `<p class="discount">Discount Applied: -${discount.toFixed(2)} PKR</p>` : ""}
//         <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)} PKR</p>
// </div>`);
   

// task 10
// var secretNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

// var userGuess = +prompt("Guess the secret number (between 1 and 10):");

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer.");
// }
//  else {
//     alert("Sorry, try again. The secret number was: " + secretNumber);
// }


// task 11
// var number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));

// if (number % 3 === 0) {
//     alert("The number " + number + " is divisible by 3.");
// } else {
//     alert("The number " + number + " is not divisible by 3.");
// }


// task 12
// var teamA = prompt("Enter the name of Team A:");
// var teamB = prompt("Enter the name of Team B:");
// var scoreA = parseInt(prompt("Enter the total score of " + teamA + ":"));
// var scoreB = parseInt(prompt("Enter the total score of " + teamB + ":"));

//     if (scoreA > scoreB) {
//     alert(teamA + " wins!");
//     } else if (scoreB > scoreA) {
//     alert(teamB + " wins!");
//     } else {
//     alert("It's a tie between " + teamA + " and " + teamB + "!");
//     }


// task 13
// var stringValue = prompt("Enter a string:");
// var numberValue = prompt("Enter a number:");
// var booleanValue = prompt("Enter true or false (Boolean):");

// numberValue = Number(numberValue); // Convert to number
// booleanValue = booleanValue.toLowerCase() === "true"; // Convert to Boolean

// if (typeof stringValue === "string") {
//     alert(`"${stringValue}" is a string.`);
// }

// if (!isNaN(numberValue) && typeof numberValue === "number") {
//     alert(`${numberValue} is a number.`);
// }

// if (typeof booleanValue === "boolean") {
//     alert(`${booleanValue} is a boolean.`);
// }


// task 14
// temperature
// var temperature = +prompt("enter karachi temperature")
// if (temperature > 40){
//     alert("temperature is normal")
// }
// else if(temperature > 30){
//     alert("temperature is normal2")
// }
// else if(temperature > 10){
//     alert("temperature is so cool")
// }else{
//     alert("bhak beta")
// }

// task 15
// calculator
// var firstvalue = +prompt("enter first number");
// var secondvalue = +prompt("enter second number");
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if(operation === '+' ){
//     result = firstvalue + secondvalue
//     alert("your result is" + result)
// }
// if(operation === '-' ){
//     result = firstvalue - secondvalue
//     alert("your result is" + result)
// }
// if(operation === '*' ){
//     result = firstvalue * secondvalue
//     alert("your result is" + result)
// }
// if(operation === '/' ){
//     result = firstvalue / secondvalue
//     alert("your result is" + result)
// }


// task 16
// var dayName = prompt("Enter the name of the day:").toLowerCase();

// if (dayName === "monday" || dayName === "tuesday" || dayName === "wednesday" || 
//     dayName === "thursday" || dayName === "friday") {
//     alert("It’s a week day");
// } else if (dayName === "saturday") {
//     alert("It’s weekend");
// } else if (dayName === "sunday") {
//     alert("Yay! It’s a holiday");
// } else {
//     alert("Invalid day name. Please try again.");
// }


// task 17
// var score = parseInt(prompt("Enter your score:"));

// if (score > 50) {
//     alert("You are passed!");
// } else {
//     alert("Try again!");
// }


// task 18
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));

// if (num1 > num2) {
//     alert(`The greater number of ${num1} and ${num2} is ${num1}.`);
// } else if (num2 > num1) {
//     alert(`The greater number of ${num1} and ${num2} is ${num2}.`);
// } else {
//     alert(`Both numbers are equal: ${num1} and ${num2}.`);
// }

// task 19
// var number = parseFloat(prompt("Enter a number:"));

// if (number > 0) {
//     alert(`${number} is a positive number.`);
// } else if (number < 0) {
//     alert(`${number} is a negative number.`);
// } else {
//     alert("The number is zero.");
// }

// task 20
// var noun = prompt("Enter a noun:");
// var count = parseInt(prompt("Enter a number:"));

// var pluralNoun = (count === 1) ? noun : noun + "s";
// alert(`${count} ${pluralNoun}`);