//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
//Print the result to the console. Add a new age to your array and repeat the step above to ensure it is dynamic 
//(works for arrays of different lengths). Use a loop to iterate through the array and calculate the average age. 
//Print the result to the console.


let ages = [3,9,23,64,2,8,28,93];
console.log(ages[ages.length - 1] - ages[0]);

ages.push(45);

console.log(ages[ages.length - 1] - ages[0]);

let sum = 0
for (let i = 0; i < ages.length; i++){
    sum+= ages[i]; // sum = sum + ages[i]
}
console.log(Math.round(sum/ages.length));

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
sum=0;
for(i=0; i < names.length; i++){
   sum += names[i].length;
}
console.log(sum/names.length);

let con = names[0];
for(i = 1; i < names.length; i++){
    con = con.concat(" ",names[i]);
}
console.log(con);

//How do you access the last element of any array?
//array.push()

//How do you access the first element of any array?
// array.unshift()

let namesArray = ["Kelly", "Sam", "Kate"]; 
let nameLengths = [5, 3, 4];  


// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
for(i=0; i < names.length; i++){
    nameLengths[i] = names[i].length;
}
sum=0;
for(i = 0; i < nameLengths.length; i++)
{
sum = sum + nameLengths[i];
}
console.log(sum);




//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the 
function concat_n_times(word, n)
{
let con= word;
for(i=1; i<=n; i++)
{
con = con.concat(word);
}
return con;
}
console.log("Concatenated words : ",concat_n_times("Hello", 3));

//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName)
{
return firstName.concat(" ", lastName);
}
console.log("Full Name : ",fullName("John", "Smith"));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isTotalGreaterThan100(arr)
{
sum=0;
for(i=0; i<arr.length; i++)
{
sum = sum + arr[i];
}
if(sum > 100)
{
return true;
}
else
{
return false;
}
}
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(arr)
{
sum=0;
for(i=0; i<arr.length; i++)
{
sum = sum + arr[i];
}
return (sum/arr.length);
}
function compare_average(arr1, arr2)
{
if(average(arr1) > average(arr2))
{
return true;
}
else
{
return false;
}
}
let myArr = [10, 20, 30, 40, 50]

let myArr2 = [20, 30, 10]

console.log(isTotalGreaterThan100(myArr));

console.log(average(myArr));

console.log(compare_average(myArr, myArr2));


//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function willBuyDrink(isHotOutside, moneyInPocket)
{
if((isHotOutside) && (moneyInPocket > 10.50))
{
return true;
}
else
{
return false;
}
}
//Value initialization
let hotOutside = true;
let moneyInthePocket = 30.5;
//Printing the return value of willBuyDrink function
console.log("Drink can be buy : ",willBuyDrink(hotOutside, moneyInthePocket));