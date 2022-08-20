import React from 'react';
import SinglePet from './SinglePet';

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {

  const [species, setSpecies]= React.useState('all')

  const handleChange = async (event)=>{
    setSpecies(event.target.value)
  }
  return props.isLoading ? ( <h1>loading</h1>) : (
    <>
      <select name="species" id='species' onChange={handleChange}>
        <option value={'all'}>Cats and Dogs</option>
        <option value={'cat'}>Just Cats!!</option>
        <option value={'dog'}>Just Dogs</option>
        <option value={'bunny'}>Bunnies are Cute!!!</option>
      </select>
      <div className="pet-list">
      {props.pets.
      filter(elem =>{if(species==='all'){return elem} 
      else{return elem.species===species}})
      .map(elem=><SinglePet delete = {props.delete} key={elem.id} pet={elem}/>)}
      </div>
    </>
  )
}

export default PetList;
