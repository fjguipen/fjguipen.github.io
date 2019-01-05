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
//El boton para abrir el panel izquierdo solo es visible al pasar la pantalla principal
const activateColumControl = () => {
    let button = document.querySelector('#left-column-control')
    let markUp = document.querySelector('#wrapper').offsetTop
    if (pageYOffset + 100 >= markUp ){
        button.classList.add('visible')
    } else {
        button.classList.remove('visible')
    }
}
/**
 * Control sobre el panel izquierdo, al hacer click en el boton añadimos
 * o quitamos las clases para los estados de panel visible y no visible
 **/
const columControl = (button, wrapper) => {
    let leftColumn = wrapper.querySelector('.left-column')
    let rightColumn = wrapper.querySelector('.right-column')

    if(!leftColumn.classList.contains('visible')){
        leftColumn.classList.add('visible')
        rightColumn.classList.add('disabled')
        button.classList.add('rotated')
        document.querySelector('body').classList.add('no-scroll')
    } else {
        leftColumn.classList.remove('visible')
        rightColumn.classList.remove('disabled')
        button.classList.remove('rotated')
        document.querySelector('body').classList.remove('no-scroll')
    }
}
//Script que pone fin al estado "Cargando"
const loading = () => {
    let body = document.querySelector('body');
    let loader = document.querySelector('.loader');
    
    loader.classList.add('d-none');
    body.classList.remove('no-scroll');
}

const fadeIn = (elemento) => {
    elemento.classList.add('fadeOn')
}
//Control de los enlaces por JS, para permitir un scroll suave
const goToLink = (event, anchor) => {
    event.preventDefault();

    let element = document.querySelector(anchor)
    let distance = element.offsetTop
    let parent = element.offsetParent

    while (parent && parent.tagName != "BODY"){
        element = parent;
        parent = element.offsetParent
        distance += element.offsetTop
    }
    //Cierro los paneles abiertos para evitar conflictos y dar prioridad al seguimiento del enlace
    destroyPanels()

    window.scrollTo({
        top: distance,
        left:0,
        behavior: 'smooth'
    })
}

const destroyPanels = () => {
    let leftColumnPanel = document.querySelector('#wrapper > .left-column')
    let rightColumn = document.querySelector('#wrapper > .right-column')
    let menuButton = document.querySelector('#menuTrigger')
    let button = document.querySelector('#left-column-control')

    menuButton.checked = false;
    if(leftColumnPanel.classList.contains('visible')){
        leftColumnPanel.classList.remove('visible')
        rightColumn.classList.remove('disabled')
        button.classList.remove('rotated')
        document.querySelector('body').classList.remove('no-scroll')
    }
}