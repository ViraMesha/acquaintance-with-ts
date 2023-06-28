// 1. Basic ts types - number, string, boolean, null, undefined

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

let age: number;
let name1: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a: number): number => {
  return 100 + a;
};

// 2. Any - can hold values of any type
let anything: any;
anything = -20;
anything = "Text";
anything = {};

// 3. unknown - handle values of unknown type

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// 4. tuple - defines arrays with fixed element types and lengths
let person: [string, number];
person = ["Max", 21];

// 5. enum - represents a set of named values

enum Status {
  LOADING,
  READY,
}

const apiResponse = {
  status: Status.LOADING,
};

if (apiResponse.status === Status.LOADING) {
  console.log("API request is in progress");
}

if (apiResponse.status === Status.READY) {
  console.log("API request is completed");
}

// 6. union - variables that can hold values of multiple types

let union: string | number;

function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
  return param1.toString() + param2.toString();
}

// 7. literal - defines specific values that a variable can take

let literal: "enable" | "disable";

const books: string[] = [];

function updateBooks(array: string[], action: "add" | "delete", value: string) {
  if (action === "add") {
    array.push(value);
  } else {
    if (array.includes(value)) {
      array.splice(array.indexOf(value), 1);
    }
    console.log(`Sorry, there isn't any book with the title '${value}'`);
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
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// 9. Function type - specifies the types of function parameters and return values

function calcWithCallback(
  num1: number,
  num2: number,
  callback: (arrg1: number, arrg2: number) => number
) {
  return callback(num1, num2);
}

function addition(num1: number, num2: number): number {
  return num1 + num2;
}

const result = calcWithCallback(5, 7, addition);

// 10. Custom Types - defines complex data structures

type PageData = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

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
