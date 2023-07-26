const urlApi = 'http://localhost:8000/api/creyentes/personalData';

const getAll = async () => {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const getOne = async (id) => {
    try {
        const response = await fetch(`${urlApi}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const postData = async (registro) => {
    await fetch(urlApi, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
            "Content-Type": "application/json"
        }
    })

}

const deleteData = async (id) => {
    try {
        await fetch(`${urlApi}/${id}`,{
            method: "DELETE"
        } )
    } catch (error) {
      console.log(error);  
    }
}

const updateData = async (id, actualizado) => {
    try {
        await fetch(`${urlApi}/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(actualizado)
        } )
    } catch (error) {
      console.log(error);  
    }
}

export {
    getAll,
    getOne,
    postData,
    deleteData,
    updateData
}