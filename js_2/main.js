// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
    if(num1>num2){
      return num1;
    }
    else if (num2>num1) {
      return nuum2;
    }
    else{
      return "They are equal";
    }
}
let large = 99;
let small = 1;
max(large, small);

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    if(num1>num2 && num1>num3){
      return num1;
    }
    else if(num2>num1 && num2>num3){
      return num2;
    }
    else if(num3>num1 && num3>num2){
      return num3;
    }
    else{
      return "All three numbers are equal";
    }
}
let biggest = 99;
let bigger = 50;
let smallest = 1;
maxOfThree(biggest, bigger, smallest);
// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if((char === a )||(char === e )||(char === i )||(char === o )|| (char === u )){
      return true;
    }
    else{
      return false;
    }
}
let letter = "a"
isVowel(letter);

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2){
  return num1 + num2;
}
let sum1 = 5;
let sum2 = 4;
sum(sum1, sum2);

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3){
  let sumOf = num1 + num2 + num3;
  return sumOf/3;
}
let avg1 = 4;
let avg2 = 5;
let avg3 = 6;
avg(avg1, avg2, avg3);
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(word){
  return word.length;
}
let lengthOf = "hello";
getLength(lengthOf);
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(num1, num2){
  if(num1<num2){
    return true;
  }
  else{
    return false;
  }
}
let greaterT = 78;
let lessT = 65;
greaterThan(greaterT, lessT);

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){

    return "Hello, " + name;
}
let yourName = "Brendan";
greet(yourName);

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madLib(word1, word2, word3, word4){
  return "My name is " + word1 + "and i love to " + word2 + "while im at " + word3 + "because it is " + word4;

}
let myName = "Brendan";
let what = "code";
let where = "The Iron Yard";
let why = "awesome";
madLib(myName, what, where, why);
