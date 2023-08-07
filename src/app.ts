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

// Модуль 2 --Практика***************************************************************
// 1. Задайте правильні ts типи для класичних js;

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

// 2. Задайте тип для змінної, в яку можна зберегти будь-яке значення.

let anything: any = -20;
anything = "Text";
anything = {};

// 3. Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// 4. Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person: [string, number];

person = ["Max", 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

// Зробіть змінну, яка може приймати або рядок, або число.

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

enum Load {
  LOADING,
  READY,
}

const page = {
  load: Load.READY,
};

if (page.load === Load.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
  console.log("Сторінка завантажена");
}

// Вкажіть типи для наступних функцій
// function showMessage(message) {
//   console.log(message);
// }

// function calc(num1, num2) {
//   return num1 + num2;
// }

// function customError() {
//   throw new Error("Error");
// }

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Створіть свій тип даних на основі наявних даних.
// const page1 = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: "2021-01-01",
//     updateAt: "2021-05-01",
//   },
// };

// const page2 = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};
//============================================================================================================
/* Модуль 4
Створіть абстрактний клас House, в ньому повинна бути наступна логіка

властивість door – вона може бути закрита, або відкрита.
властивість key – об'єкт класу Key.
конструктор приймає аргумент класу Key та зберігає його у властивість key.
метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.
абстрактний метод openDoor приймає аргумент класу Key
Створіть клас MyHouse, який реалізує клас House

створюємо метод openDoor, оскільки він приймає ключ, звіряємо збережений ключ у властивості key чи дорівнює він
ключу з аргументу, якщо так, відкриваємо двері.
Створіть об'єкт Key

є тільки властивість signature
під час створення об'єкта генерує випадкове число та зберігає його у signature
метод getSignature повертає випадкове число з signature
Створіть об'єкт Person

конструктор приймає ключ класу Key і зберігає його у властивість key
метод getKey повертає key
Зробіть так, щоб мешканець потрапив додому.

 */

class Key {
  private signature: number;

  constructor () {
    this.signature = Math.random();
  }

  getSignature (): number {
    return this.signature;
  }
}

class Person {
  constructor (private key:Key) {}
  getKey (): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor (protected key:Key) {}

  comeIn (person: Person):void {
    if (!this.door) {
      throw new Error('Door is close');
    }

    this.tenants.push(person);
    console.log('Person inside');
  }

  abstract openDoor (key:Key): boolean;
}

class MyHouse extends House {
  openDoor (key:Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door');
    }

    return this.door = true;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.§getKey());

house.comeIn(person);
  