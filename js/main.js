"user strict"
// Task 1 

// let user = {     
//     name: "Dima",  
//     age: 27        
// };

// console.log(user);
// delete user.age;

// // Task 2
// let user = {     
//     name: "Dima",  
//     age: 27        
// };

// if(Object.keys(user).includes('name')){
//     console.log('true')
//     } else {
//     console.log('false')
//     }

//  / 1. Object.keys(user) -> ['name', 'age'] -> includes('name') 

//    2. user.hasOwnProperty('name')

//    3. if ('name' in user)



// //Task 3
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// for (let key in student) {
// console.log(key);
// console.log(student[key]);

// console.log(`${key} - ${student[key]}`)
// }

// for (let key in student) {      //2 вариант
//     console.log(key);

//     }
//     for (let key in student) {      
//         console.log(student[key]);
//         }

// //Task 4
// const colors = {
//     // 'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий',
//     // }, 
// printColor(){
// console.log(`Пикачу я выбираю ${this['ru pum pu ru rum'].red} и ${this.blue}`);
//     }
// }
// colors['ru pum pu ru rum'].red

// colors.printColor();
// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }

// let sum = 0;
// let count = 0;

// for (const person in salaraies) {
//     sum += salaries[person];
//     count++;
// }

// const result = sum / count;




// Task 6 
// let userName = prompt("Логин?", '');

// if (userName === 'Dima') {

//   let pass = prompt('Пароль?', '');

//   if (pass === '1234') {
//     alert( 'Добро пожалоВать' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Ахирел" );
// }

// const login = prompt('Enter login');
// const password = prompt('Enter password');

// const userInfo = {
//     login,
//     password
// };

// const validateLogin = prompt('Enter your login for verify:');
// const validatePasword = prompt('Enter your password for verify:');

// if (validateLogin === userInfo.login && validatePasword === userInfo.password) {
//     console.log('Wellcome!');
// } else {
//     console.log('Not valid credentials!');
// }