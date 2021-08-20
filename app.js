//const { argv, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors  = require('colors');
const argv = require('./config/yargs');

console.clear();

console.log( argv );

// const [,,arg3]  = process.argv;
// const [,base] = arg3.split('=');
// console.log(base);

//const base = 5;
crearArchivo(argv.b, argv.l, argv.h)
 .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
 .catch(err => console.log(err));
