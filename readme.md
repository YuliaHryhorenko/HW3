
# 3 Домашнє завдання

Файл  `hw3UsersNumber.txt`, містить всіх студентів групи і кожному призначено унікальний номер. Згідно свого номера знайти у `unique_users.json` об'єкт та для цього об'єкта вивести наступні значення:
  всю інформацію об'єкта цілком
  одне хоббі останнє
  в форматованому вигляді Address: місто, вулиця

об'єкт може бути скопійований з файлу `unique_users.json` у ваш класс

```javascript
/*ці операціі можна робити руками
/ Знайти номер студента з файлу hw3UsersNumber.txt
/ Знайти користувача за його номером у файлі unique_users.json
/ Скопіювати об'єкт з unique_users.json
/ Вставити скопійований об'єкт в свій js файл 
*/

// Функція для виведення інформації про користувача
// Визначаємо об'єкт
обєкт = {
    "id": "0098",
    "name": "Alice 98",
    "address": {
        "street": "1100 Main St",
        "city": "City 100"
    },
    "hobbies": [
        "Reading 98",
        "Hiking 98"
    ]
}

// Виводимо всю інформацію об'єкта
Функція printFullObject(обєкт):
    Для кожного ключа, значення в обєкті:
        Якщо значення є іншим обєктом:
            Вивести ключ
            printFullObject(значення) // Рекурсивно виводимо вміст підоб'єктів
        Інакше:
            Вивести "Ключ: Значення"

// Виводимо останнє хобі
Функція printLastHobby(обєкт):
    останнє_хобі = об'єкт.hobbies[-1] // Вибираємо останній елемент зі списку хобі
    Вивести "Останнє хобі: " + останнє_хобі

// Виводимо адресу в форматованому вигляді
Функція printFormattedAddress(обєкт):
    адреса = обєкт.address
    форматована_адреса = "Address: " + адреса.city + ", " + адреса.street
    Вивести форматована_адреса

// Викликаємо функції
printFullObject(обєкт)
printLastHobby(обєкт)
printFormattedAddress(обєкт)

```


# 3.1 додаткове завдання із зірочкою, не обовязкове до виконання, спробувати зчитати об'єкт напряму з файлу `unique_users.json`

це псевдокод для додаткового завдання

```javascript
// Початок програми

// Завантаження бібліотеки для роботи з файловою системою
Підключити бібліотеку "fs"

// Оголошення функції для читання JSON-файлу
Функція читати_JSON_файл(ім'я_файлу, зворотній_виклик):
    Прочитати_файл(ім'я_файлу, 'utf8', (помилка, дані) => {
        Якщо (помилка) Тоді:
            Вивести_помилку("Помилка при читанні файлу: " + помилка)
            Повернути
        Кінець_якщо

        Спробувати:
            Розпарсити_JSON(дані, (помилка, об'єкт) => {
                Якщо (помилка) Тоді:
                    Вивести_помилку("Помилка при розборі JSON: " + помилка)
                    Повернути
                Кінець_якщо

                Викликати_зворотній_виклик(об'єкт)
            })
        Зловити (помилка):
            Вивести_помилку("Помилка при розборі JSON: " + помилка)
    })
Кінець_функції

// Оголошення функції для пошуку користувача за номером
Функція знайти_користувача_за_номером(номер, користувачі):
    Повернути користувачі.знайти((користувач) => користувач.номер === номер)
Кінець_функції

// Оголошення функції для виведення потрібної інформації про користувача
Функція вивести_інформацію_про_користувача(користувач):
    Вивести "Інформація про користувача:"
    Вивести користувач
    Вивести "Останнє хобі:", користувач.хобі[довжина(користувач.хобі) - 1]
    Вивести "Адреса:", користувач.адреса.місто, користувач.адреса.вулиця
Кінець_функції

// Читаємо файл unique_users.json і знаходимо користувача з номером 0077
читати_JSON_файл('unique_users.json', (користувачі) => {
    const користувач = знайти_користувача_за_номером('0077', користувачі)
    Якщо (користувач) Тоді:
        вивести_інформацію_про_користувача(користувач)
    В іншому випадку:
        Вивести "Користувача з таким номером не знайдено."
})
```
