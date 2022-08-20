import React from 'react';
import axios from 'axios';


const DeletePet = (props) =>{
    const handleDelete = async (event) =>{
        try{
            let id = event.target.value
            await axios.delete(`/api/pets/${id}`)
            props.delete()
        }
        catch(err){console.error(err)}
    }

    return(
        <><button value={props.pet.id} onClick={handleDelete} className='delete-pet'>Delete</button></>
    )
};

export default DeletePet;