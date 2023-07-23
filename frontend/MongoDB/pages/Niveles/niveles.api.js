const urlNiveles = "http://localhost:8000/api/niveles";

export const getNiveles= async ()=>{
  try {
      const nivele = await fetch (`${urlNiveles}/`);
      const datoNiveles = await nivele.json();
      console.log(datoNiveles);
      return datoNiveles;
  } catch (error) {
      console.log(error);
  }
};
export const newNiveles = async (registroNivele) => {
  console.log(registroNivele);
  try {
    await fetch(`${urlNiveles}/`,{
      method:'post',
      body: JSON.stringify(registroNivele),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./niveles.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteNiveles = async idNivele =>{
  console.log(idNivele);
  try {
    await fetch (`${urlNiveles}/${idNivele}`,{
        method:'DELETE'
    })
    window.location="./niveles.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editNiveles = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlNiveles}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateNiveles => {
      console.log('DATOS Actualizados',updateNiveles);
    })
    window.location="./niveles.html" 
  } catch (error) {
    console.log(error);
  }
};