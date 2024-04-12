let UserInformation = {
    "id": "0037",
    "name": "Alice 37",
    "address": {
        "street": "1100 Main St",
        "city": "City 100"
    },
    "hobbies": [
        "Reading 37",
        "Hiking 37"
    ]
}


// виводжу всю інформацію об'єкта:
function printFullObject(UserInformation) {
    // Для кожного ключа та значення в об'єкті
    for (let key in UserInformation) {
        // Якщо значення є об'єктом
        if (typeof UserInformation[key] === 'object') {
            // Виводимо ключ
            console.log(key + ":");
            // Рекурсивно виводимо вміст підоб'єкта
            printFullObject(UserInformation[key]);
   
        } else { // Інакше виводимо "Ключ: Значення"
            console.log("  " + key + ": " + UserInformation[key]);
        }
    }
}


// виводжу останнє хобі:
function printLastHobby (UserInformation) {
let lastHobby = UserInformation.hobbies[UserInformation.hobbies.length - 1];
console.log(`Останнє хоббі: ` + lastHobby);
}

// виводжу форматовану адресу:
function printFormattedAddress(UserInformation) {
    let address = UserInformation.address;
    let formattedAddress = `Address: ${address.city}, ${address.street}`;
    console.log(`Форматована адреса: ${formattedAddress}`);
}

// викликаю функції:
printFullObject(UserInformation);
printLastHobby(UserInformation);
printFormattedAddress(UserInformation);