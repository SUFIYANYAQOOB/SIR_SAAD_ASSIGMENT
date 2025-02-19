// task 1
// for(var i =1; i<=5; i++){
//     document.write("hello world <br>")
// }

// task 2
// for(var i=1; i<=10; i++){
//     document.write(i ,"<br>");
// }

// task 3
// table print;
// var tablenum = prompt ("enter your table");
// var lastnum = prompt ("enter your last num");
// for (var i=1; i<= lastnum; i++){
//     document.write(`${tablenum} x ${i} = ${i*tablenum} <br>`)
// };

// task 4
// var arr = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for(var i = 1; i < arr.length; i++){
//     document.write(arr[i],"<br>");
// }

// task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i],"<br>");
// }

// task 6
// var N = parseInt(prompt("Enter the number of items:"));
// var items = [];
// for (var i = 0; i < N; i++) {
//     var item = prompt(`Enter item ${i + 1}:`);
//     items.push(item);
// }
// document.write("your array:",items);

// task 7
// var counting = [];
// for (var i = 1; i <= 15; i++) {
//     counting.push(i);
// }
// document.write("Counting: " + counting ,"<br>");

// var reverseCounting = [];
// for (var i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// document.write("Reverse Counting: " + reverseCounting + "<br>");

// // c. Even numbers: 0 to 20
// var evenNumbers = [];
// for (var i = 0; i <= 20; i += 2) {
//     evenNumbers.push(i);
// }
// document.write("Even: " + evenNumbers + "<br>");

// var oddNumbers = [];
// for (var i = 1; i < 20; i += 2) {
//     oddNumbers.push(i);
// }
// document.write("Odd: " + oddNumbers+ "<br>");

// task 8
// var A = [24, 53, 78, 91, 12];
// var largest = Math.max(...A);
// document.write(largest)

// task 9
// var s = [24, 53, 78, 91, 12];
// var largest = Math.min(...s);
// document.write(largest)

// task 10
// var A = [24, 53, 78, 91, 12];
// var largest = Math.max(...A);
// var smallest = Math.min(...A);
// document.write("the largest number is", largest , "<br>")
// document.write("the smallest number is", smallest)

// task 11
// for (var i = 5; i <= 100; i += 5) {
//     document.write(i,"<br>")
// }

// task 12
// var students = ["Ali", "Sami", "Taha", "Imam"];
// var scores = [58, 73, 89, 90];
// for (var i = 0; i < students.length; i++) {
//     // console.log(students[i] + " scored " + scores[i]);
//     document.write(students[i] + "scored" + scores[i],"<br>");
// }

// task 13
// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = parseInt(prompt("Enter the stop value:"));
// var stopIndex = scores.indexOf(stopValue);
// if (stopIndex !== -1) {
//     for (let i = 0; i <= stopIndex; i++) {
//         document.write(scores[i] + " ");
//     }
// } else {
//     document.write("Stop value not found in the array.");
// }

// task 14
// var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A[i].length; j++) {
//         document.write(A[i][j] + "<br>");
//     }
// }

// task 15
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//         // document.write(i + "odd" , "<br>")
//     }
// }

// task 16
// var product = 1;
// for (var i = 1; i <= 7; i += 2) {
//     product *= i;  
// }
// console.log("The product of odd integers from 1 to 7 is:", product);




// var student = ['sufiyan','ismail','sufi'];
// var institute = ['saylani' ,'smit'];
// for (var i = 0; i < student.length; i ++){
//     for(var j = 0; j < institute.length; j++){
//         document.write(student[i] + " " + institute[j] + "<hr>")
//     };
// };



// for (i = 1; i<= 100; i=i+10){
//     for (j = i; j < i+10; j++){
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }

// pattern
// for(var i = 1; i<=6; i++){
//     for(var j = 1; j<i ; j++){
//         document.write(j + " " )
//     }
//     document.write("<br>")
// }

// pattern2
for (var i = 1; i<=6; i--){
    for (var j=1; j<i ; j++){
        document.write(j + " ")
    }
    document.write("<br>")
}
