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
    let entryRow = `<div class="entry studio">
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
    let entryRow = `<div class="entry exp">
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
                                <textarea id="descripcionExp${cont}" name="descripcionExp${cont}"></textarea>
                            </div>
                        </div>
                        <button class="right" onclick="deleteEntry(event)">Borrar</button>
                        <div class="clearfix"></div>
                    </div>`

    event.preventDefault()
    event.target.insertAdjacentHTML('beforebegin', entryRow);
}

function creaCurriculum(event){
    event.preventDefault()
    let estudios = new Map();
    Array.from(document.querySelectorAll('.entry.studio input'))
    .forEach(e=>{
       estudios.set(e.name, e.value)
    })
    let numRowsEstudios = document.querySelectorAll('section .entry.studio').length
    
    let trabajos = new Map()
    Array.from(document.querySelectorAll('.entry.exp input'))
    .forEach(e=>{
        trabajos.set(e.name, e.value)
    });
    Array.from(document.querySelectorAll('.entry.exp textarea')).forEach(e=>{
      trabajos.set(e.name, e.value);
    })
    let numRowsExp = document.querySelectorAll('section .entry.exp').length

    let curriculum = ` <div class="esquina-doblada no-print">
                            <div class="fondo"></div>
                            <div class="doblez"></div>
                            <div class="sombra-abajo"></div>
                            <div class="sombra-derecha"></div>
                        </div>
                        <header>
                            <h2 class="left"><strong>Curriculum Vitae</strong><br>${document.querySelector('#name').value}</h2>
                            <div class="avatar">
                                <img src="../img/avatar.png">
                                <div class="clearfix"></div>
                            </div>
                        </header>
                        <section id="estudios">
                            <h3 class="bold">ESTUDIOS</h3>`

    for(let i=0; i < numRowsEstudios;i++){
        curriculum+=    `<div class="grid">
                            <div class="">
                                <span class="when bold">${estudios.get(`fechaStudio${i}`)}</span><br>
                                <span class="where">${estudios.get(`lugarStudio${i}`)}</span>
                            </div>
                            <div class="">
                                <span class="what bold">Técnico superior en desarrollo de Aplicaciones Web</span><br>
                                <span class="at">Nuevas Profesiones</span>
                            </div>
                        </div>`

    }                        

    curriculum += `</section>
                        <section id="exp-laboral">
                            <h3 class="bold">EXPERIENCIA LABORAL</h3>`
                            
      for(let i=0;i < numRowsExp;i++){
        curriculum+=    `<div class="grid">
                            <div class="">
                                <span class="when bold">${trabajos.get(`fechaExp${i}`)}</span><br>
                                <span class="where">${trabajos.get(`lugarExp${i}`)}</span>
                            </div>
                            <div class="">
                                <span class="what bold">${trabajos.get(`empresaExp${i}`)}</span><br>
                                <span class="what bold">Cargo ocupado: ${trabajos.get(`cargoExp${i}`)}</span>
                            </div>
                        </div>
                        <div class="grid">
                            <div class=""></div>
                            <div class="descripcion">
                                Tareas realizadas: ${trabajos.get(`descripcionExp0${i}`)}
                            </div>
                        </div>`
      }                     

    curriculum+= `</section>`;

    //curriculum = encodeURI(curriculum);
    curriculum = curriculum.replace("curriculum=","")
    curriculum = curriculum.replace(/(\r\n\t|\n|\r\t)/gm,"");

    document.cookie = `curriculum=${curriculum};` 


    event.target.submit()
    //window.location = 
}


