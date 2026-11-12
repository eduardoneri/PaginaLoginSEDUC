let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})

function login(){
    let usuario = document.querySelector('#usuário')
    let userlabel = document.querySelector('#userlabel')

    let senha = document.querySelector('#usuario')
    let senhalabel = document.querySelector('#senhalabel')

    let msgErro = document.querySelector('msgError')
    let listaUser = []

    
}