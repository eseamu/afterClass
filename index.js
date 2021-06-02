define([
    'jquery',
], function($) {
    
    
});
$("#formulario").on("submit", function(e){
    e.preventDefault();
    var nombre = $("#nomb").val();
    var apellido = $("#apellido").val();
    var direccion = $("#direccion").val();
    var sexo = $("#sexo").val();
    

    console.log("Nombre: "+nombre);
    console.log("Apellido: "+apellido);
    console.log("Direccion: "+direccion);
    console.log("Sexo:"+sexo);
    })
});