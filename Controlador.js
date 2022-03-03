function recibir(nombre,correo,contraseña,plan,callback){
    setTimeout(function(){
        usuario={
            nombre:nombre,
            correo:correo,
            contraseña:contraseña,
            plan:plan
        }
        callback(usuario)
    },10000)
}

recibir("simon","simon@gmail.com","123456simon"," Mensual ", function(usuario){


    console.log(usuario)

    console.log("Su nombre es : "+ usuario.nombre +" , su plan de HBO es : " +usuario.plan)
})