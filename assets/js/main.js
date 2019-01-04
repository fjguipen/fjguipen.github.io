window.onload = () => {
    //Placeholder carga de la pagina
    loading();
    //FadeIn h1
    fadeIn(document.querySelector('#inicio .fadingFast'));

    //Boton columnas
    activateColumControl()
    window.onscroll = () => {
        activateColumControl()
    }

}

//Scroll suave hasta el contenido, usamos un anchor tag como refuerzo por si JS está desactivado
const toContent = (e) => { 
    e.preventDefault()
    let contentPosition = document.querySelector('#wrapper').offsetTop;

    window.scrollTo({
        top: contentPosition,
        left:0,
        behavior: 'smooth'
    })
}
const activateColumControl = () => {
    let button = document.querySelector('#left-column-control')
    let markUp = document.querySelector('#wrapper').offsetTop
    if (pageYOffset + 100 >= markUp ){
        button.classList.add('visible')
    } else {
        button.classList.remove('visible')
    }
}
const columControl = (button, wrapper) => {
    let leftColumn = wrapper.querySelector('.left-column')
    let rightColumn = wrapper.querySelector('.right-column')

    if(!leftColumn.classList.contains('visible')){
        leftColumn.classList.add('visible')
        rightColumn.classList.add('disabled')
        button.classList.add('rotated')
    } else {
        leftColumn.classList.remove('visible')
        rightColumn.classList.remove('disabled')
        button.classList.remove('rotated')
    }
}
const loading = () => {
    let body = document.querySelector('body');
    let loader = document.querySelector('.loader');
    
    loader.classList.add('d-none');
    body.classList.remove('no-scroll');
    

}

const fadeIn = (elemento) => {

    elemento.classList.add('fadeOn')


}