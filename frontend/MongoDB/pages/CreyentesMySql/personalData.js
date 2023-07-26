import { getAll, getOne, postData, deleteData, updateData } from "./api.js";
import { getAllBarrios } from "../Barrios/api.js";

addEventListener("DOMContentLoaded", cargarRegistros);
const container = document.querySelector('#datosCreyentes');
const barriosSelect = document.querySelector('#barrioInput');

async function cargarRegistros() {
  const dbRegistros = await getAll();
  console.log(dbRegistros);
  
  const barrios = await getAllBarrios();
	barrios.forEach(bar => {
		barriosSelect.innerHTML += `
		<option value="${bar.id_barrio}">${bar.nombre_barrio}</option>
		`
	});
  
  dbRegistros.forEach((rgt, index) => {
    let {id_creyente, nombre_creyente, email_creyente, celular_creyente, direccion_creyente, fk_id_barrio, nombre_barrio} = rgt;
    container.innerHTML += `
    <div class="card m-3">
    <div class="content">
        <div class="back">
            <div class="back-content">
                <div class="front-content">
                    <small class="badge">${index+1}</small>
                </div>
                <strong>${nombre_creyente}</strong>
            </div>
        </div>
        <div class="front">
            <div class="img">
                <div class="circle">
                    </div>
                    <div class="circle" id="right">
                </div>
                <div class="circle" id="bottom">
                </div>
            </div>
            <div class="description ">
                <div class="title pt-5">
                    <div class="">
                        <div class="d-flex">
                            <h5>Nombre:</h5>
                            <h6 class="ms-3">${nombre_creyente}</h6>
                        </div>
                        <div class="d-flex">
                            <h5>Email:</h5>
                            <h6 class="ms-3">${email_creyente}</h6>
                        </div>
                        <div class="d-flex">
                            <h5>Celular:</h5>
                            <h6 class="ms-3">${celular_creyente}</h6>
                        </div>
                        <div class="d-flex ">
                            <h5>Dirección:</h5>
                            <h6 class="ms-1">${direccion_creyente}</h6>
                        </div>
                        <div class="d-flex">
                            <h5>Barrio:</h5>
                            <h6 class="ms-3">${nombre_barrio}</h6>
                        </div>
                        <div class="d-flex mt-5 mx-4 ">
                            <button class="btn btn-outline-warning update mx-2 " data-bs-toggle="modal" data-bs-target="#editarModal" idEditar="${id_creyente}"><i class="bi bi-pen"></i> Editar</button>
                            <button class="btn btn-outline-danger delete mx-2" idEliminar="${id_creyente}"><i class="bi bi-recycle"></i> Eliminar</button>
                        </div>
                    </div>	
                </div>
                <p class="card-footer"></p>
            </div>
        </div>
    </div>
</div>
</div>
    `
  });
}



/* post */
const btnRegistrar = document.querySelector('#btnRegistrar');

btnRegistrar.addEventListener("click", insertarData);

async function insertarData(e) {
  e.preventDefault();
  
  let nombre = document.querySelector('#nombreInput').value;
  let email = document.querySelector('#emailInput').value;
  let celular = document.querySelector('#celularInput').value;
  let direccion = document.querySelector('#direccionInput').value;
  /* falta barrio fk */
  let paisNatal = document.querySelector('#paisNatal').value;

  let nuevoRegistro = {
    nombre,
    email,
    celular,
    direccion,
    }

    postData(nuevoRegistro);
}

container.addEventListener("click", oneOrAnother);

function oneOrAnother(e){
  if(e.target.classList.contains("delete")){
    eliminarRegistros(e);
  }
  if(e.target.classList.contains("update")){
    launchModalUpt(e);
  }
}

function eliminarRegistros(e){
  if(confirm("¿Seguro desea eliminar este registro?")){
    let id = e.target.getAttribute("idEliminar");
    deleteData(id);
    window.location.reload();
  }
}

/* update */
const updateModal = document.querySelector('#updateModal');
async function launchModalUpt(e){
  let idUpdate = e.target.getAttribute("idEditar");
  let {id_creyente, nombre_creyente, email_creyente, celular_creyente, direccion_creyente} = await getOne(idUpdate)

  document.querySelector('#idUpt').value = id_creyente;
  document.querySelector('#nombreUpt').value = nombre;
  document.querySelector('#edadUpt').value = edad;
  document.querySelector('#equipoUpt').value = equipo;
  document.querySelector('#carrerasCorridasUpt').value = carrerasCorridas; 
  document.querySelector('#dniUpt').value = dni;
  document.querySelector('#paisNatalUpt').value = paisNatal;
}

updateModal.addEventListener("submit", actualizarRegistros)

async function actualizarRegistros() {
  let id_creyente = document.querySelector('#idUpt').value;
  let nombre_creyente = document.querySelector('#nombreInputUpt').value;
  let email_creyente = document.querySelector('#emailInputUpt').value;
  let celular_creyente = document.querySelector('#celularInputUpt').value;
  let direccion_creyente = document.querySelector('#direccionInputUpt').value; 
  /* falta fk barrio */
  let barrio = document.querySelector('#barrioInputUpt').value;



  let actualizado = {
    nombre_creyente,
    email_creyente,
    celular_creyente,
    direccion_creyente
  }

  await updateData(id_creyente, actualizado);
}