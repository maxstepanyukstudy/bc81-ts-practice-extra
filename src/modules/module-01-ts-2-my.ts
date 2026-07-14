import axios from "axios";

type Role1 = "admin" | "user";

enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

function handeleGreetMessage(name: string, role: Role): string {
  switch (role) {
    case Role.Admin:
      return `Hello Admin, ${name}`;
    case Role.Guest:
      return `Hello Guest, ${name}`;
    case Role.User:
      return `Hello, ${name}`;

    default:
      return `Hello, unknown ${name}`;
  }
}
console.log(handeleGreetMessage("Alice", Role.Admin));
console.log(handeleGreetMessage("Bob", Role.Guest));
console.log(handeleGreetMessage("John", Role.User));
console.log(handeleGreetMessage("Anonim")); // ts error

// ======================

// Задача 1. Узагальнена функція wrapInArray
// Умова
// Є функція:
// function wrapInArray(value) {
//   return [value];
// }
// Зараз вона не типізована.
// Завдання
// Зроби функцію узагальненою.

function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray(1));
console.log(wrapInArray("asd"));
console.log(wrapInArray<boolean>(false));
console.log(wrapInArray<string>("asd"));

// ======================

// Задача 2. Узагальнена функція getLastElement
// Умова
// Створи функцію getLastElement, яка:
// приймає масив будь-якого типу
// повертає останній елемент масиву
// Зроби функцію узагальненою.

function getLastElement<T>(array: T[]): T {
  return array[array.length - 1];
}

console.log(getLastElement<number>([1, 2, 3]));
console.log(getLastElement<boolean>([true, false]));
console.log(getLastElement<string>(["a", "b"]));
console.log(getLastElement<string | number | boolean>(["yes", true, 1]));

// ======================

// Задача 3. Узагальнена функція pair
// Умова

// Створи функцію pair, яка:

// приймає два значення, які можуть бути різного типу

// повертає їх як 1) масив /  2)кортеж

// Зроби функцію узагальненою

function pair1<T, U>(value1: T, value2: U): (T | U)[] {
  return [value1, value2];
}

console.log(pair1(123, "asd"));
console.log(pair1<string, number>("asd", 123));
console.log(pair1<string, boolean>("isActive", true));

function pair2<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
  //   return [value2, value1]; // ts error
}

console.log(pair2(123, "asd"));
console.log(pair2<string, number>("asd", 123));
console.log(pair2<string, boolean>("isActive", true));

// ========================

// Задача 5. Узагальнена функція firstOrDefault
// Умова
// Створи функцію firstOrDefault, яка:
// приймає масив будь-якого типу
// повертає перший елемент масиву або null, якщо масив порожній
// зроби функцію узагальненою

function firstOrDefault<T>(array: T[]): T | null {
  if (array.length === 0) {
    return null;
  }
  return array[0];

  // //  solution 2 - but doent handle [undefined] well
  // return array[0] ?? null
}

console.log(firstOrDefault<number>([1, 2, 3]));
console.log(firstOrDefault<number>([]));
console.log(firstOrDefault<number>([undefined]));

// ============

interface User {
  name: string;
}

interface Responce<T> {
  status: number;
  message: string;
  data: T;
}

// interface TodoResponce {
//   status: number;
//   message: string;
//   data: User[];
// }

const todoResp: Responce<User[]> = {
  status: 200,
  message: "success",
  data: [{ name: "Alex" }, { name: "Vlad" }],
};

// interface OneTodoResponce {
//   status: number;
//   message: string;
//   data: User;
// }

const oneTodoResp: Responce<User> = {
  status: 200,
  message: "success",
  data: { name: "Alex" },
};

// =======================

// Задача 7. Узагальнена функція delay з Promise
// Умова

// Створи функцію delay, яка:
// приймає значення будь-якого типу
// приймає час у мілісекундах
// повертає Promise, який після затримки повертає передане значення
// зроби функцію узагальненою

function delay<T>(value: T, delayMs: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delayMs);
  });
}

delay<string>("hello", 1000).then((value) => {
  console.log(value);
});

// =======================

// Задача 8. Узагальнена функція fetchData з Axios
// Умова

// Створи функцію fetchData, яка:
// приймає URL
// робить GET-запит через axios
// повертає масив об’єктів певного типу, який визначається узагальненням

async function fetchData<T>(url: string): Promise<T[]> {
  const { data } = await axios.get<T[]>(url);
  return data;
}

fetchData<User>("example.com").then((data) => {
  console.log(data);
});

// =======================

// Задача 9. Узагальнена функція zip
// Умова
// Створи функцію zip, яка:

// приймає два масиви різного типу
// повертає масив кортежів

// якщо масиви різної довжини, ігнорує зайві елементи
// зроби функцію узагальненою

function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  const len = Math.min(arr1.length, arr2.length);

  const result: [T, U][] = [];

  for (let i = 0; i < len; i += 1) {
    result.push([arr1[i], arr2[i]]);
  }

  return result;
}

// Приклад використання:

const numbers = [1, 2, 3];
const strings = ["a", "b"];
const zipped = zip(numbers, strings); // [[1,"a"], [2,"b"]]
console.log("🚀 ~ zipped:", zipped);
