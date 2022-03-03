function recibir(nombre,correo,contraseña,plan){
    let promesa=new Promise(function(resolve,reject){

        setTimeout(function(){
            usuario={
                nombre:nombre,
                correo:correo,
                contraseña:contraseña,
                plan:plan
            }
            console.log("OE")
            resolve("Bienvenido a HBO "+usuario.correo)
            //reject("Bienvenido a HBO "+usuario.nombre)
        },2000)
    })
    return promesa
}
recibir("simon","simon@gmail.com","123456simon"," Mensual ")
/*.catch(function(respuesta){
    console.log(respuesta)
})*/
.then(function(respuesta){
    console.log(respuesta)
})