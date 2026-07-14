// Задача 10. Узагальнені функції saveToStorage і loadFromStorage
// Умова
// Створи дві функції:
// 1) saveToStorage
// приймає ключ
// приймає значення будь-якого типу
// зберігає його у localStorage у форматі JSON
// 2) loadFromStorage
// приймає ключ
// повертає значення
// Зроби обидві функції узагальненими.

function saveToStorage<T>(key: string, value: T): void {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}
saveToStorage("first", 25);

function loadFromStorage<T>(key: string): T | null {
  const data = localStorage.getItem(key);
  const result = data !== null ? JSON.parse(data) : null;
  return result;
}
console.log(loadFromStorage<number>("first"));
