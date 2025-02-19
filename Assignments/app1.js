// task 1
// var studentname = [];
// task 2
// var studentname = new array();
// task 3
// var array = ['hello'];
// console.log(array)
// task4
// var number = [1,2,3,4,5];
// console.log(number)
// task 5
// var bol = ['hello'];
// if (bol = 'hello'){
//     alert(true)
// }
// task 6
// var mix = ['hello',1,5 ,'hel'];
// console.log(mix)
// task 7
// var mobileNetworks = ["Jazz", "Telenor", "Zong", "Ufone", "Scom"];
// console.log(mobileNetworks);
// task 8
// let topMovies = [];
// topMovies.push("Mad Max: Fury Road");
// topMovies.push("The Martian");
// topMovies.push("Avengers: Age of Ultron");
// topMovies.push("Inside Out");
// topMovies.push("Jurassic World");
// document.write("<p><strong>Top Movies:</strong> " + topMovies + "</p>");
// document.write("<p><strong>Total Movies:</strong> " + topMovies.length + "</p>");
// task 9
// var favoriteCars = ["Tesla Model S", "BMW M4", "Audi R8", "Mercedes AMG GT", "Lamborghini Huracan"];
// document.write("<p><strong>a. First index of the array:</strong> 0</p>");
// document.write("<p><strong>b. Car at first index of the array:</strong> " + favoriteCars[0] + "</p>");
// document.write("<p><strong>c. Last index of the array:</strong> " + (favoriteCars.length - 1) + "</p>");
// document.write("<p><strong>d. Car at last index of the array:</strong> " + favoriteCars[favoriteCars.length - 1] + "</p>");
// task 10
// var studentNames = ["Ali", "sufiyan", "Hassan"];
// var studentScores = [420, 460, 390];
// var totalMarks = 500;

// var percentageAli = (studentScores[0] / totalMarks) * 100;
// var percentageSara = (studentScores[1] / totalMarks) * 100;
// var percentageHassan = (studentScores[2] / totalMarks) * 100;

// document.write("<p><strong>" + studentNames[0] + ":</strong> Scored " + studentScores[0] + 
//                " out of " + totalMarks + " → Percentage: " + percentageAli.toFixed(2) + "%</p>");
// document.write("<p><strong>" + studentNames[1] + ":</strong> Scored " + studentScores[1] + 
//                " out of " + totalMarks + " → Percentage: " + percentageSara.toFixed(2) + "%</p>");
// document.write("<p><strong>" + studentNames[2] + ":</strong> Scored " + studentScores[2] + 
//                " out of " + totalMarks + " → Percentage: " + percentageHassan.toFixed(2) + "%</p>");
// task 11
// var colors = ["Red", "Blue", "Green", "Yellow"];

// document.write("<p><strong>Initial Array of Colors:</strong> " + colors.join(", ") + "</p>");

// var colorAtStart = prompt("Enter a color you want to add at the beginning:");
// colors.unshift(colorAtStart); 
// document.write("<p><strong>After Adding to the Beginning:</strong> " + colors.join(", ") + "</p>");

// var colorAtEnd = prompt("Enter a color you want to add at the end:");
// colors.push(colorAtEnd); 
// document.write("<p><strong>After Adding to the End:</strong> " + colors.join(", ") + "</p>");

// colors.unshift("Orange", "Purple");
// document.write("<p><strong>After Adding Two Colors to the Beginning:</strong> " + colors.join(", ") + "</p>");

// colors.shift(); 
// document.write("<p><strong>After Deleting the First Color:</strong> " + colors.join(", ") + "</p>");

// colors.pop();
// document.write("<p><strong>After Deleting the Last Color:</strong> " + colors.join(", ") + "</p>");

// var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// var colorToAdd = prompt("Enter the color you want to add at index " + indexToAdd + ":");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<p><strong>After Adding a Color at Index " + indexToAdd + ":</strong> " + colors.join(", ") + "</p>"); 

// var indexToDelete = parseInt(prompt("Enter the index from where you want to delete colors:"));
// var countToDelete = parseInt(prompt("How many colors do you want to delete from index " + indexToDelete + "?"));
// colors.splice(indexToDelete, countToDelete); 
// document.write("<p><strong>After Deleting Colors from Index " + indexToDelete + ":</strong> " + colors.join(", ") + "</p>");
// task 12
// var studentScores = [450, 370, 490, 420, 380];

// document.write("<p><strong>Original Scores:</strong> " + studentScores.join(", ") + "</p>");

// studentScores.sort(function(a, b) {
//     return a - b;
// });

// document.write("<p><strong>Sorted Scores (Ascending):</strong> " + studentScores.join(", ") + "</p>");
// task 13
// var fruits = ["strawberry", "apple", "orange", "banana"];

// document.write("<p><strong>Original Array:</strong> " + fruits.join(", ") + "</p>");

// fruits.sort();

// document.write("<p><strong>Sorted Array:</strong> " + fruits.join(", ") + "</p>");
// task 14
    // var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

    // var selectedCities = cities.slice(0, 3);

    // document.write("<p><strong>Original Cities Array:</strong> " + cities.join(", ") + "</p>");
    // document.write("<p><strong>Selected Cities Array:</strong> " + selectedCities.join(", ") + "</p>");
// task 15
// var arr = ["This ", " is ", " my ", " cat"];
// var resultString = arr; 
// document.write("<p><strong>Resulting String:</strong> " + resultString + "</p>");

// task 16
// var fifoQueue = [];
// fifoQueue.push("Value 1");  
// fifoQueue.push("Value 2");  
// fifoQueue.push("Value 3");  

// document.write("<p><strong>Array after adding values:</strong> " + fifoQueue + "</p>");

// var firstValue = fifoQueue.shift();  
// document.write("<p><strong>First value removed (FIFO):</strong> " + firstValue + "</p>");
// document.write("<p><strong>Updated Array after removing the first value:</strong> " + fifoQueue + "</p>");
    
// task 17
// var lifoStack = [];

// lifoStack.push("Value 1");  
// lifoStack.push("Value 2");  
// lifoStack.push("Value 3");  

// document.write("<p><strong>Array after adding values:</strong> " + lifoStack + "</p>");

// var lastValue = lifoStack.pop(); 
// document.write("<p><strong>Last value removed (LIFO):</strong> " + lastValue + "</p>");
// document.write("<p><strong>Updated Array after removing the last value:</strong> " + lifoStack + "</p>");

// task 18
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var selectMenu = "<select>"
// selectMenu += "<option value='" + manufacturers[0] + "'>" + manufacturers[0] + "</option>";
// selectMenu += "<option value='" + manufacturers[1] + "'>" + manufacturers[1] + "</option>";
// selectMenu += "<option value='" + manufacturers[2] + "'>" + manufacturers[2] + "</option>";
// selectMenu += "<option value='" + manufacturers[3] + "'>" + manufacturers[3] + "</option>";
// selectMenu += "<option value='" + manufacturers[4] + "'>" + manufacturers[4] + "</option>";
// selectMenu += "<option value='" + manufacturers[5] + "'>" + manufacturers[5] + "</option>";
// selectMenu += "</select>";
// document.write(selectMenu);

// task 19
// var emptyArray = [[], [], []];  

// task 20
// var matrix = [
//     [1, 2, 3],  
//     [4, 5, 6],  
//     [7, 8, 9]   
// ];
// document.write(matrix[0] + "<br>"); 
// document.write(matrix[1] + "<br>");  
// document.write(matrix[2] + "<br>");  





