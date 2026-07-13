interface Person {
  name: string;
  age: number;
}

interface Dog {
  color: string;
  breed: string;
}

type ArrElement = Person | Dog;

const arr1: ArrElement[] = [
  { name: "Ivan", age: 21 },
  { color: "black", breed: "buldog" },
];

interface Animal {
  color: string;
  name: string;
}

interface Animal {
  breed: string;
}

const cat: Animal = {
  color: "black",
  name: "Tom",
  breed: "cat",
};

interface AnimalPro extends Animal {
  family: string;
}

const animal: AnimalPro = {
  color: "black",
  name: "Tom",
  breed: "cat",
  family: "mammal",
};

// ===================

// 1. Просте додавання чисел

// Умова:
// Напиши функцію add, яка приймає два числа та повертає їх суму.

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(9, 10));

// ==============================

// 2. Привітання користувача

// Умова:
// Функція greetUser приймає ім’я (string) і логічне значення isMorning (boolean).
// Повертає рядок "Good morning, {name}" якщо isMorning === true, і "Hello, {name}" якщо false.

function greetUser(name: string, isMorning: boolean): string {
  const prefix = isMorning ? "Good morning, " : "Hello, ";
  return prefix + name;
}

console.log(greetUser("Allice", false));
console.log(greetUser("Bob", true));

// ==============================

// 3. Перевірка числа

// Умова:
// Функція isPositive приймає будь-яке значення (unknown) і повертає boolean:

// true якщо це число > 0,

// false якщо число ≤ 0 або не число.

function isPositive(value: unknown): boolean {
  if (typeof value !== "number") {
    return false;
  }
  return value > 0;
}

console.log(isPositive(1));
console.log(isPositive(-1));
console.log(isPositive(NaN));
console.log(isPositive("abc"));

// ================================

// 4. Об’єкт користувача

// Умова:
// Створи інтерфейс User з полями:
// name: string
// age: number
// email?: string (optional)

interface User2 {
  name: string;
  age: number;
  email?: string;
}

// Функція getUserSummary приймає об’єкт User та повертає рядок "Name: {name}, Age: {age}, Email: {email}".
// Якщо email немає — виводимо "Name: {name}, Age: {age},  Email: N/A".

function getUserSummary(user: User2): string {
  const { name, email, age } = user;
  const emailString = email ? email : "N/A";
  return `Name: ${name}, Age: ${age}, Email: ${emailString}`;
}

console.log(getUserSummary({ name: "alice", age: 25 }));
console.log(getUserSummary({ name: "bob", age: 21, email: "bob@bob.com" }));

// =================================

// 5. Масив чисел

// Умова:
// Функція sumArray приймає масив чисел number[] і повертає їхню суму.

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([]));

// ====================

// 6. Масив рядків або чисел

// Умова:
// Функція joinArray приймає масив, елементи якого можуть бути string або number і повертає рядок з усіх елементів, розділених комою.

function joinArray(array: (number | string)[]): string {
  // return array.join()
  return array.join(", ");
}

console.log(joinArray([123, "asd"]));

// ====================

// 9. Об’єднання union типів

// Умова:
// Функція formatValue приймає параметр value: string | number | boolean і повертає рядок:

// якщо boolean — "true"/"false",

// якщо number — "Number: {value}",

// якщо string — "String: {value}".

function formatValue(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `String ${value}`;
  }
  if (typeof value === "number") {
    return `Number ${value}`;
  }
  // return value ? "true" : "false"
  return String(value);
}

console.log(formatValue("hello"));
console.log(formatValue(123));
console.log(formatValue(true));
console.log(formatValue(false));

// =======================

// 10. Масив невідомого типу

// Умова:
// Функція countNumbers приймає масив unknown[] і повертає кількість чисел у масиві.

function countNumbers(array: unknown[]): number {
  // let numbersAmount = 0;
  // array.forEach((item) => {
  //   if (typeof item === 'number') {
  //     numbersAmount += 1;
  //   }
  // })
  // return numbersAmount;

  return array.filter((item) => typeof item === "number").length;
}

console.log(countNumbers([123, false, "qwer", 1]));
