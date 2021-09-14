'use strict'

const MyMath = require('./MyMath.js')

/* 
Require work:
1) Resolve - поиск
2) Read - чтение файла
3) Wrap - обретка в функцию, inject переменных
4) Eval - запуск кода, поиск ошибок
5) Cache - запоминание экспорта после eval

Код при импорте запускается один раз
*/

/* 
Resolve - поиск
1) core modules - встроенные в nodejs модули
(условие - без расширения файла, без слеша / или ./ вначале)
2) File
(условие - есть слеш вначале - относ ./ или абс путь /)
если без расширения файла - сначала поиск .js потом .json
3) Directory
если в директории есть package.json - в нем поле "main"
иначе в директории index.js
4) в папке node_modules/
5) Error: Cannot find module
*/

console.log(MyMath)
