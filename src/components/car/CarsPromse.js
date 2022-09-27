/*
Actividad Ahora: Crear una api de prueba, 
extraer datos de la misma con funciones asincronicas o promesas,
renderizar estos datos (Pueden usar funciones como map o filter)
OPCIONAL: darle un poco de css a la aplicacion web.
 */

let p = new Promise((resolver,rechazar)=>{

    let a = 1 + 3;
    if (a == 4){
        resolver('- Exito');

    }
    else{
        rechazar('- Fracaso');
    }

})

p.then((mensaje)=>{
    console.log('Este mensaje esta en el then ' + mensaje);
    console.log(p);
}).catch((mensaje)=>{
    console.log('Este mensaje esta en el catch ' + mensaje);
    console.log(p);
})

console.log("Test")
