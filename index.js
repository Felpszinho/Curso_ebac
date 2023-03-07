$(document).ready(function () {

    $('form ,button').click(function () {
      
        


    })
    $(function(clicar){




    });
    $('form').on('submit',function (e) {


        e.preventDefault();
        const tarefa = $('#terefa').val();  
        const  linha = $(`<li></li>`);

        $(`<li>${tarefa}</li>`).click(function(){

        linha.css('text-decoration', 'line-through');
      
             
        }).appendTo(linha);

        

        
        
        
       
       
        $(linha).appendTo('ul');
  
      
       
        
        
        


        
        




    })
   







})


