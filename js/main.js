window.onload = function () {
    loading();
    fadeIn();
}


function loading() {
    let body = document.querySelector('body');
    let loader = document.querySelector('.loader');

    loader.classList.add('d-none');
    body.classList.remove('no-scroll');

}

function fadeIn() {
    let elemento = document.querySelector('.fading')

    elemento.classList.add('fadeOn')


}

function openForm() {
    let form = document.querySelector('#form');
    let body = document.querySelector('body');

    body.classList.add('no-scroll');
    form.classList.remove('d-none')
}

function closeForm(event) {
    let form = document.querySelector('#form');
    let body = document.querySelector('body');

    event.preventDefault()
    body.classList.remove('no-scroll');
    form.classList.add('d-none')
}

function deleteEntry(event){
    event.preventDefault();
    event.target.parentNode.remove()
}

function addCampoEstudio(event) {
    let section = event.target.parentNode;
    let cont = section.children.length - 2;
    let entryRow = `<div class="entry">
                        <div class="row">
                            <div class="form-group">
                                <label for="fechaStudio${cont}">Fecha:</label>
                                <input type="text" id="fechaStudio${cont}" name="fechaStudio${cont}" >
                            </div>
                            <div class="form-group">
                                <label for="lugarStudio${cont}">Lugar:</label>
                                <input type="text" id="lugarStudio${cont}" name="lugarStudio${cont}" placeholder="Localidad, Provincia">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="tituloStudio${cont}">Títulación:</label>
                                <input type="text" id="tituloStudio${cont}" name="tituloStudio${cont}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="entidadStudio${cont}">Titulo concedico por:</label>
                                <input type="text" id="entidadStudio${cont}" name="entidadStudio${cont}">
                            </div>
                        </div>
                        <button class="right" onclick="deleteEntry(event)">Borrar</button>
                        <div class="clearfix"></div>
                    </div>`

    event.preventDefault()
    event.target.insertAdjacentHTML('beforebegin', entryRow);
}

function addCampoExp(event) {
    let section = event.target.parentNode;
    let cont = section.children.length - 2;
    let entryRow = `<div class="entry">
                        <div class="row">
                            <div class="form-group">
                                <label for="fechaExp${cont}">Fecha:</label>
                                <input type="text" id="fechaExp${cont}" name="fechaExp${cont}">
                            </div>
                            <div class="form-group">
                                <label for="lugarExp${cont}">Lugar:</label>
                                <input type="text" id="lugarExp${cont}" name="lugarExp${cont}" placeholder="Localidad, Provincia">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="empresaExp${cont}">Títulación:</label>
                                <input type="text" id="empresaExp${cont}" name="empresaExp${cont}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="cargoExp${cont}">Titulo concedico por:</label>
                                <input type="text" id="cargoExp${cont}" name="cargoExp${cont}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label for="descripcionExp${cont}">Tareas desempeñadas:</label>
                                <textarea id="descripcionExp${cont}"></textarea>
                            </div>
                        </div>
                        <button class="right" onclick="deleteEntry(event)">Borrar</button>
                        <div class="clearfix"></div>
                    </div>`

    event.preventDefault()
    event.target.insertAdjacentHTML('beforebegin', entryRow);
}
