const urlCreyentes = "http://localhost:8000/api/creyentes";

export const getCreyentes= async ()=>{
  try {
      const creyente = await fetch (`${urlCreyentes}/`);
      const datoCreyentes = await creyente.json();
      console.log(datoCreyentes);
      return datoCreyentes;
  } catch (error) {
      console.log(error);
  }
};
export const newCreyentes = async (registroCreyente) => {
  console.log(registroCreyente);
  try {
    await fetch(`${urlCreyentes}/`,{
      method:'post',
      body: JSON.stringify(registroCreyente),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    // window.location = "./creyentes.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteCreyentes = async idCreyente =>{
  console.log(idCreyente);
  try {
    await fetch (`${urlCreyentes}/${idCreyente}`,{
        method:'DELETE'
    })
    window.location="./creyentes.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editCreyentes = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlCreyentes}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateCreyentes => {
      console.log('DATOS Actualizados',updateCreyentes);
    })
    window.location="./ciclistas.html" 
  } catch (error) {
    console.log(error);
  }
};