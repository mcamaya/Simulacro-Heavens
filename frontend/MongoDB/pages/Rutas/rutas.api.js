const urlRutas = "http://localhost:8000/api/rutas";

export const getRutas= async ()=>{
  try {
      const ruta = await fetch (`${urlRutas}/`);
      const datoRutas = await ruta.json();
      console.log(datoRutas);
      return datoRutas;
  } catch (error) {
      console.log(error);
  }
};
export const newRutas = async (registroRuta) => {
  console.log(registroRuta);
  try {
    await fetch(`${urlRutas}/`,{
      method:'post',
      body: JSON.stringify(registroRuta),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./rutas.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteRutas = async idRuta =>{
  console.log(idRuta);
  try {
    await fetch (`${urlRutas}/${idRuta}`,{
        method:'DELETE'
    })
    window.location="./rutas.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editRutas = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlRutas}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateRutas => {
      console.log('DATOS Actualizados',updateRutas);
    })
    window.location="./rutas.html" 
  } catch (error) {
    console.log(error);
  }
};