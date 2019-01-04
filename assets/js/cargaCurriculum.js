window.onload= function(){
    loading();
    cargarCurriculum()
}

function cargarCurriculum(){
    let cont = document.querySelector('.folio');
    let curriculum = document.cookie;
    
    if(!curriculum){
        curriculum = "No hay datos"
    }

    cont.insertAdjacentHTML('beforeend', curriculum.replace("curriculum=", ""))
    //console.log(curriculum)
}

function loading() {
    let body = document.querySelector('body');
    let loader = document.querySelector('.loader');

    loader.classList.add('d-none');
    body.classList.remove('no-scroll');

}
