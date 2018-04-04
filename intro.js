// console.log('hello');

// i = 0
// while i < 10
//   p i
//   i += 1
// end

// simple 'for' loop
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var fruits = ["apple", "banana", "pear", "tomato"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }




// # Write a method that prints out every number from 1 to 100.
function oneToOneHundred() {
  for (var i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// oneToOneHundred();

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// function everyOtherToOneHundred() {
//   for (var i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//       console.log(i);
//     }
//   }
// }

// everyOtherToOneHundred();

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function countOfFiftyFives(inputArray) {
//   var counter = 0;
//   for (var i =0; i < inputArray.length; i++) {
//     if (inputArray[i] === 55) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countOfFiftyFives([12,435,6,123,6,56,55,55,55]));

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function awesomesauced(inputArray) {
//   var newArray = [];
//   for (var i = 0; i < inputArray.length; i++) {
//     newArray.push(inputArray[i]);
//     if (i < inputArray.length - 1) {
//       newArray.push("awesomesauce");
//     }
//   }
//   return newArray;
// }

// console.log(awesomesauced(["a", "b", "c", "d", "e"]));



// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}
// var itemAmounts = {chair: 5, table: 2};
// itemAmounts.chair = 3;
// console.log(itemAmounts)


// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}
// var itemAmounts = {chair: 5, table: 2};
// itemAmounts.desk = 7;
// console.log(itemAmounts);


// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// function factorial(inputNumber) {
//   var total = 1;
//   for (var i = 1; i <= inputNumber; i++) {
//     total = total * i;
//   }
//   return total;
// }

// console.log(factorial(5));

// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function sumCombinations(firstArray, secondArray) {
//   var newArray = [];
//   for (var i = 0; i < firstArray.length; i++) {
//     for (var j = 0; j < secondArray.length; j++) {
//       newArray.push(firstArray[i] + secondArray[j]);
//     }
//   }
//   return newArray;
// }

// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));


// x = 10
// var x = 10;
// // if x == "10"
// if (x === "10") {
//   console.log('equal');
// } else {
//   console.log("not equal");
// }

//   puts "equal"
// else
//   puts "not equal"
// end

// def print_lyrics
//   puts "Now this is a story all about how"
//   puts "My life got flipped turned upside down"
//   puts "And I'd like to take a minute, just sit right there"
//   puts "I'll tell you how I became the prince of a town called Bel-Air"
// end

// print_lyrics

// function printLyrics() {
//   console.log("Now this is a story all about how");
//   console.log("My life got flipped turned upside down");
//   console.log("And I'd like to take a minute, just sit right there");
//   console.log("I'll tell you how I became the prince of a town called Bel-Air");
// }

// printLyrics();


// x = 100
// def add_one(num)
//   x = 1
//   return num + x
// end
// puts x           #=> 100
// puts add_one(5)  #=> 6
// puts x           #=> 100

// var x = 100;

// function addOne(num) {
//   x = 1;
//   return num + x;
// }

// console.log(x);
// addOne(5);
// console.log(x);


// class Boat
//   attr_reader :name, :color
//   attr_writer :color

//   def initialize(name, color, price)
//     @name = name
//     @color = color
//     @price = price
//   end

//   def color=(new_color)
//     @color = new_color
//   end
// end

// boat = Boat.new("S. S. Minnow", "white", 20000 )
// p boat
// p boat.name
// boat.color = "red"
// p boat.color

// var boat = {name: "S.S. Minnow", color: "white", price: 20000};

// console.log(boat);
// console.log(boat.name);
// boat.color = "red";
// console.log(boat.color);
