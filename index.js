const form=document.getElementById('form')

function valida(nomeu){
    let nomeArray=nomeu.split="";
    return nomeArray.length >=2;
}

form.addEventListener('submit',function(e){
    let formvalido=false;
    e.preventDefault()

 const nome=document.getElementById('nome');
 const a=document.getElementById('a');
 const b=document.getElementById('b');
 const msg=` tudo certo ${nome.value} o numero ${b.value} é mairo que  ${a.value} `


 formvalido=valida(nome.value)
 if(b.value >a.value){

    const contmsg=document.querySelector('.msg');
    contmsg.innerHTML=msg;
    contmsg.style.colot="green";
    form.style.backgroundColor=rgb='#939';
    nome.style.backgroundColor=rgb='#000';
    a.style.backgroundColor=rgb="#000";
    b.style.backgroundColor=rgb="#000";
 
    nome.value='';
    a.value='';
    b.value='';

 }
 else{
    alert('errado');
form.style.backgroundColor="red";
 nome.style.backgroundColor="red";
 a.style.backgroundColor="red";
 b.style.backgroundColor="red";

 nome.value='';
 a.value='';
 b.value='';
 }
 


})