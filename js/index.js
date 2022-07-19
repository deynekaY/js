//const message = 'Hello JS!';
//alert(message);

const userAge = Number (prompt("Введіть свій вік"));
alert('Ваш вік: ' + userAge);


const nextAge = add(userAge, 1);  //userAge + 1
alert('Наступний вік: ' + nextAge);


if (userAge >=18) {
alert('Полнолетний')
} else {
alert('Неполнолетний')
}

function add(a, b) {
    const sum = a + b; //result
    return sum;
}