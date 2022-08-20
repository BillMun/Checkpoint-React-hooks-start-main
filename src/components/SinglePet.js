import React from 'react';
import DeletePet from './DeletePet';

function SinglePet(props) {
  const [adopted, setAdopted] = React.useState(false)

  return (
    <div className={`single-pet`+`${ adopted ? ' adopted':''}`}>
      <DeletePet delete = {props.delete} pet= {props.pet}/>
        <h1>Meet {props.pet.name}!</h1>
        <div>{props.pet.name} is a {props.pet.species}</div>
        <div>{props.pet.description}</div>
        <div>{adopted ? 'Adopted!!':'Available!!'}</div>
        <button onClick={()=>setAdopted(!adopted)}>
          toggle status
        </button>
      
    </div>
  );
}

export default SinglePet;
