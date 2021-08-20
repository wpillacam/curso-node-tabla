const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe: 'base de la tabla multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',        
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',        
        default: false,
        describe: 'limite de la multiplicacion'
    })
    .check( ( argv, options) =>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero';
        }        
        return true;
    })
    .argv;

module.exports = argv;