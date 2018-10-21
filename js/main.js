window.onload = function (){
    loading();
    fadeIn();
}


function loading (){
    let body = document.querySelector('body');
    let loader = document.querySelector('.loader');
 
    loader.classList.add('d-none');
    body.classList.remove('no-scroll');

}

function fadeIn(){
    let elemento = document.querySelector('.fading')

    elemento.classList.add('fadeOn')

    
}

function openForm(){
    let form = document.querySelector('#form');
    let body = document.querySelector('body');
    
    body.classList.add('no-scroll');
    form.classList.remove('d-none')
}

function closeForm(event){
    let form = document.querySelector('#form');
    let body = document.querySelector('body');

    event.preventDefault()
    body.classList.remove('no-scroll');
    form.classList.add('d-none')
}

