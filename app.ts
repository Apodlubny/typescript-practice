const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

const data: {
  id: number;
  price: number;
  permission: string[];
  details: {
    title: string;
    description?: string;
  };
} = {
  id: 1,
  price: 10.99,
  permission: ["read", "write"],
  details: {
    title: "New product",
    description: "This is awesome product!",
  },
};

function calc(
  param1: number,
  param2: number,
  callback: (num1: number, num2: number) => number
): void {
  console.log("Result:", callback(param1, param2));
}

calc(1, 1, (num1, num2) => num1 + num2);

calc(10, 5, (num1, num2) => num1 - num2);
