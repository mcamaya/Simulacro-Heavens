const urlMinisterios = "http://localhost:8000/api/ministerios";

export const getMinisterios= async ()=>{
  try {
      const ministerio = await fetch (`${urlministerios}/`);
      const datoMinisterios = await ministerio.json();
      console.log(datoMinisterios);
      return datoMinisterios;
  } catch (error) {
      console.log(error);
  }
};
export const newministerios = async (registroMinisterio) => {
  console.log(registroMinisterio);
  try {
    await fetch(`${urlMinisterios}/`,{
      method:'post',
      body: JSON.stringify(registroMinisterio),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    window.location = "./ministerios.html";
  } catch (error) {
    console.log(error);
  }
};
export const deleteMinisterios = async idMinisterio =>{
  console.log(idMinisterio);
  try {
    await fetch (`${urlMinisterios}/${idMinisterio}`,{
        method:'DELETE'
    })
    window.location="./ministerios.html" 
  } catch (error) {
    console.log(error);
  }
};
export const editMinisterios = async datos =>{
  console.log(datos._id)
  try {
    await fetch (`${urlMinisterios}/${datos._id}`,{
      method:'PATCH',
      body:JSON.stringify(datos),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => response.json())
    .then(updateMinisterios => {
      console.log('DATOS Actualizados',updateMinisterios);
    })
    window.location="./ministerios.html" 
  } catch (error) {
    console.log(error);
  }
};