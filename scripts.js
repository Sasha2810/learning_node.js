// НАЧАЛО

// const dotenv = require('dotenv') // импорт пакета dotenv
// dotenv.config() // выхываем функцию конфиг


// console.log(process.pid) // id выполняемого элемента в диспетчере задач

// console.log(process.env.PORT) // создание своих переменных env
// console.log(process.env.NODE_ENV)

// console.log(process.argv)


// if (Math.random() > 0.5) {
//     while (true) {

//     }
// } else {
//     console.log("end")
//     process.exit() // выход из программы
// }

// Пути и URL

// const path = require('path');
// console.log(path.join('first', 'second', 'third')) // склейка пути до файла и тд
// console.log('склейка пути', path.join(__dirname, 'first', 'second', 'third')) // dirname путь от корня(диска) до проекта
// console.log('склейка пути', path.join(__dirname, '..')) // возращение на однк папку назад
// console.log('склейка пути', path.resolve( 'first', 'second', 'third')) // тоже саиое только всегда абсолютный 

// const pars =  path.resolve( 'first', 'second', 'third');
// console.log('парсинг', path.parse(pars))


// const siteurl = 'http://localhost:8080/users?id=5123' // сам url

// const url = new URL(siteurl) // информация о url
// console.log(url)

// фАЙЛОВАЯ СИСТЕМА 

// const { error } = require('console');
const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.resolve(__dirname, 'dir')) // функция создания папки и путь, где она создастся
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'div2', 'div3'), {recursive:true}) // создвние нескольких папок 

// асинхроная функцию (выполняется не поочереди)

// console.log('start') // выполняется 1

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => { //3
//         if (err) {
//             console.log(err)
//             return;
//         }
//         console.log('папка создана')
//     }
// )
// console.log('end') // 2

//удаление папки
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => { //3
//     if (err) {
//         throw err 
//     }}
// )

//запись в папку
fs.writeFile(path.resolve(__dirname, 'text.txt'), 'dsdsdsdsdd', (err) => {
    if (err) {
        throw err;
    }
    console.log('файл записан')
})