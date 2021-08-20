const fs = require('fs');
const colors  = require('colors');
const crearArchivo = (base = 5, listar = false, hasta=10) =>{

    return new Promise( (resolve, reject) =>{
        
        let salida= '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } ${'X'.green} ${i} ${'='.green} ${base * i} \n`;            
        }

        if(listar){
            console.log('================'.green);
            console.log('tabla del: ', colors.blue(base));
            console.log('================'.green);
            console.log(salida);
        }

        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt creado `);
    })

    
}

module.exports={
    crearArchivo: crearArchivo
}