// const button = document.querySelector("button")! as HTMLInputElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

// const data: {
//   id: number;
//   price: number;
//   permission: string[];
//   details: {
//     title: string;
//     description?: string;
//   };
// } = {
//   id: 1,
//   price: 10.99,
//   permission: ["read", "write"],
//   details: {
//     title: "New product",
//     description: "This is awesome product!",
//   },
// };

// function calc(
//   param1: number,
//   param2: number,
//   callback: (num1: number, num2: number) => number
// ): void {
//   console.log("Result:", callback(param1, param2));
// }

// calc(1, 1, (num1, num2) => num1 + num2);

// calc(10, 5, (num1, num2) => num1 - num2);

// Задайте правильні ts типи для класичних js;

let age: number;
age = 50;
let userName: string;
userName = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
let callback = (a: number) => {
  return 100 + a;
};

// Задайте тип для змінної, в яку можна зберегти будь-яке значення.

let anything: any = -20;
anything = "Text";
anything = {};

// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.

let some: string;
some = "Text";

let str: string;

str = some;

// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person: [string, number];

person = ["Max", 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

// Зробіть змінну, яка може приймати або рядок, або число.

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

// Вкажіть типи для наступних функцій
