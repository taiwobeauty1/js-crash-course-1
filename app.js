// Declaring a variable
// keyword identifier/VariableName = value
var firstName = "Huseina";
let lastName = "Jamil";
let age = 27;
let isMarried = true;
let children = ["Bright", "Simon", "Patrick"];
let other = {
    favoriteColor: "Gold",
    favoriteSport: "Soccer",
    favoriteFruit: "Apple",
};
const fullName = firstName + " " + lastName; // string concatenation
const mySelf = `My name is ${firstName} ${lastName}`; // string interpolation
console.log(mySelf);

// STRINGS
let sentence = "This is a story about Huseina Jamil in Blind Spot";
console.log(sentence.length);
console.log(sentence.split("Huseina"));
console.log(sentence.replace("Huseina", "Patrick"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("Spot"));
console.log(sentence.includes("in"));

//ARRAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());
days.unshift("Sunday");
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Friday"));
console.log(days[5]); //retriving data
days[5] = "Sunday"; // console.log(days);

//OBJECT
let person = {
    firstName: "Huseina",
    lastName: "Jamil",
    age: 27,
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
