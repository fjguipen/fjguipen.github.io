window.onload = function (){
    loading()
}


function loading (){
    let body = document.querySelector('body');
    let loader = document.querySelector('.loader')
 
    loader.classList.add('d-none');
    body.classList.remove('no-scroll')

}