const users = ["Yuliia Hryhorenko","Артем Іванков","Артем Буруменський","Віталій Карпюк","Нікіта Сербулов","Павло Сілкін","Яків Мирончук","Юлія Левченко","Іван Поліщук","Yuliia Pasichnyk","Anna Korenchuk","Анастасія Коваленко","Вадим Мечов","Дмитрій Костриця","Катерина Статівка","Ксенія Горбунова","Юлія Репей"];

const generateNumbers = count => Array.from({ length: count }, (_, i) => (i + 1).toString().padStart(4, '0'));
const shuffle = array => array.sort(() => Math.random() - 0.5);
const uniqueNumbers = shuffle(generateNumbers(100));
const usersWithNumbers = users.map((user, index) => `${user} ${uniqueNumbers[index]}`);
console.log(usersWithNumbers);