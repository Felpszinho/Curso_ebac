document.addEventListener('DOMContentLoaded',function(){

    const  name=document.querySelector('#name');
    const  user=document.querySelector('#user');
    const  avatar=document.querySelector('#avatar');
    const  repos=document.querySelector('#repos');
    const  followers=document.querySelector('#followers');
    const  following=document.querySelector('#following');
    const  link=document.querySelector('#link');


    fetch('https://api.github.com/users/Felpszinho').then(function(resp){
        return resp.json();
    }).then(function(json){
        name.innerHTML=json.name;
        user.innerHTML=json.login;
        avatar.src=json.avatar_url;
        followers.innerHTML=json.followers;
        following.innerHTML=json.following;
        repos.innerHTML=json.public_repos;
        link.href=json.html_url;
        
    }).catch(function (erro) {
        alert("ocorreu um erro ao buscar o endereço")
        })
    
})