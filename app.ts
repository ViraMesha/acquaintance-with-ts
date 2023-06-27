// 1. Basic ts types

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

let age: number;
let name: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a: number): number => {
  return 100 + a;
};
