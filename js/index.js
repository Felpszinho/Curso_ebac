$(document).ready(function(){

    $("#telefone").mask('(00) 00000-0000')
    $("#cpf").mask('000.000.000-00')
    $("#cep").mask('00000-000')
    


    $('form').validate({

        rules: {
           nome:{
            required: true,
            

           },
           email:{
            required: true,
            email: true

           },
           telefone:{
            required: true,
          
            
           },
           cep:{
            required: true
           },
           cpf:{
            required: true,
            cpf: true
           }
           

        },

        messages: {
            nome:'ensira seu nome',
            
            telefone:'ensira seu telefone',
            email:'seu email é inválido',           
            cpf:'seu cpf é inválido',
            cep:'seu cep é inválido',

        },
        


    })
});