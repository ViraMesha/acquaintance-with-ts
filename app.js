// 1. Basic ts types
// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };
var age;
var name1;
var toggle;
var empty;
var notInitialize;
var callback = function (a) {
    return 100 + a;
};
// 2. Any
var anything;
anything = -20;
anything = "Text";
anything = {};
// 3. unknown
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// 4. tuple
var person;
person = ["Max", 21];
// 5. enum
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var apiResponse = {
    status: Status.LOADING,
};
if (apiResponse.status === Status.LOADING) {
    console.log("API request is in progress");
}
if (apiResponse.status === Status.READY) {
    console.log("API request is completed");
}
// 6. union
var union;
function combine(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    return param1.toString() + param2.toString();
}
// 7. literal
var literal;
var books = [];
function updateBooks(array, action, value) {
    if (action === "add") {
        array.push(value);
    }
    else {
        if (array.includes(value)) {
            array.splice(array.indexOf(value), 1);
        }
        console.log("Sorry, there isn't any book with the title '".concat(value, "'"));
    }
    return array;
}
updateBooks(books, "add", "Harry Potter and the Deathly Hallows");
updateBooks(books, "add", "The Catcher in the Rye");
updateBooks(books, "add", "Becoming");
updateBooks(books, "add", "The Da Vinci Code");
updateBooks(books, "add", "One Hundred Years of Solitude");
updateBooks(books, "delete", "Harry Potter and the Deathly Hallows");
console.log(updateBooks(books, "delete", "You"));
// 8. types for functions
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
// 9. Function type
function calcWithCallback(num1, num2, callback) {
    return callback(num1, num2);
}
function addition(num1, num2) {
    return num1 + num2;
}
var result = calcWithCallback(5, 7, addition);
// const page1 = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   }
// }
// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }
