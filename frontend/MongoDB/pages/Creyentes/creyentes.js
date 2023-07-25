import { getMinisterios } from "../Ministerios/ministerios.api.js"; 
import { getNiveles } from "../Niveles/niveles.api.js";
import { getRutas } from "../Rutas/rutas.api.js";
import {getCreyentes , newCreyentes ,  deleteCreyentes , editCreyentes} from "./creyentes.api.js";

addEventListener("DOMContentLoaded", cargarData)



async function cargarData() {
	const ministerios = await getMinisterios();
	ministerios.forEach(min => {
		ministeriosInput.innerHTML += `
		<option value="${min._id}">${min.Ministerio}</option>
		`
	});

	const niveles = await getNiveles();
	niveles.forEach(nvl => {
		nivelFormacionInput.innerHTML += `
		<option value="${nvl._id}">${nvl.NivelFormacion}</option>
		`
	});

	const rutas = await getRutas();
	rutas.forEach(rta => {
		nivelRutaInput.innerHTML += `
		<option value="${rta._id}">${rta.NivelRuta}</option>
		`
	});
};


addEventListener('DOMContentLoaded',()=>{
  cargaCreyente();
});

async function cargaCreyente(){
  const creyente = await getCreyentes();
  console.log(creyente);
  const tableCreyente = document.querySelector("#datosCreyentes");
  creyente.forEach((element,index) => {
    const {_id , Nombre , Documento  , Ministerio , NivelFormacion , Edad , NivelRuta} = element;
    tableCreyente.innerHTML+= `
		<div class="card m-3">
			<div class="content">
				<div class="back">
					<div class="back-content">
						<div class="front-content">
							<small class="badge">${index+1}</small>
						</div>
						<strong>${Nombre}</strong>
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
									<h6 class="ms-3">${Nombre}</h6>
								</div>
								<div class="d-flex">
									<h5>Documento:</h5>
									<h6 class="ms-3">${Documento}</h6>
								</div>
								<div class="d-flex">
									<h5>Ministerio:</h5>
									<h6 class="ms-3">${Ministerio}</h6>
								</div>
								<div class="d-flex ">
									<h5>Nivel de Formacion:</h5>
									<h6 class="ms-1">${NivelFormacion}</h6>
								</div>
								<div class="d-flex">
									<h5>Edad:</h5>
									<h6 class="ms-3">${Edad}</h6>
								</div>
								<div class="d-flex">
									<h5>Nivel de Ruta:</h5>
									<h6 class="ms-3">${NivelRuta}</h6>
								</div>
								<div class="d-flex mt-5 mx-4 ">
									<button class="btn btn-outline-warning edit mx-2 " data-bs-toggle="modal" data-bs-target="#editarModal" id="${_id}" Documento="${Documento}" Ministerio="${Ministerio}" NivelFormacion="${NivelFormacion}" Edad="${Edad}" NivelRuta="${NivelRuta}"><i class="bi bi-pen"></i> Editar</button>
									<button class="btn btn-outline-danger delete mx-2" id="${_id}"><i class="bi bi-recycle"></i> Eliminar</button>
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
};

const formulario = document.getElementById('registrarCreyente');
formulario.addEventListener("submit", newCreyente);


function newCreyente(e){
  e.preventDefault();
  const Nombre = document.querySelector('#Nombre').value;
  const Documento = document.querySelector('#Documento').value;
  const Ministerio  = document.querySelector('#ministeriosInput').value;
	const NivelFormacion = document.querySelector('#nivelFormacionInput').value;
	const Edad = document.querySelector('#Edad').value;
	const NivelRuta = document.querySelector('#nivelRutaInput').value;

  const registro = {
    Nombre,
    Documento,
    Ministerio,
		NivelFormacion,
    Edad,
    NivelRuta
  }
  console.log(registro);

  if(validation(registro)){
    alert("Todos los datos son obligatorios");
  }return newCreyentes(registro);
}

function validation(Objeto){
  return !Object.values(Objeto).every(element => element !== '')
}

const eliminar = document.querySelector('#datosCreyentes');
eliminar.addEventListener('click',deleteCreyente);

function deleteCreyente (e){
  if(e.target.classList.contains('delete')){
    console.log(e.target);
    const id = e.target.getAttribute('id');
    console.log(id);

    const confir = confirm("Desea eliminar este Creyente");
    if(confir){
      deleteCreyentes(id);
    };
  }
};

const NewDates = document.querySelector('#datosCreyentes')
NewDates.addEventListener('click',actualizar)


function actualizar(e){
  e.preventDefault();

  if(e.target.classList.contains('edit')){

    const nomcre = e.target.getAttribute('Nombre');
    const Nombre1 = document.querySelector('#Nombre2');
    Nombre1.value = nomcre;

    const descre = e.target.getAttribute('Documento');
    const Documento1 = document.querySelector('#Documento2');
    Documento1.value = descre;
    
    const mincre = e.target.getAttribute('Ministerio');
    const Ministerio1 = document.querySelector('#Ministerio2');
    Ministerio1.value = mincre;
    
    const datosId= e.target.getAttribute('id')
    console.log(datosId);
    const newDat = document.querySelector('#edit')
    newDat.addEventListener('submit', updateCreyente)


    let datos={};
    function updateCreyente(e){
      e.preventDefault();
      const Nombre = document.querySelector('#Nombre2').value ;
      const Documento = document.querySelector('#Documento2').value;
      const Ministerio = document.querySelector('#Ministerio2').value;
      console.log(Nombre);

      datos={
        _id:datosId,
        Nombre,
				Documento,
				Ministerio,
				NivelFormacion,
				Edad,
				NivelRuta
      }
      console.log(datos._id);
      editCreyentes(datos)
    }  
  }
}