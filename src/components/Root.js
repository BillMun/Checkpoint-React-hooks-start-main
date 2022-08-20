import React from 'react';
import PetList from './PetList';
import axios from 'axios'

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root = () => {

  const [pets,setPets ] = React.useState([])
  const [isLoading,setLoading] = React.useState(true)

  const fetchPets = async () =>{
    try{
        const serverPets = await axios.get('/api/pets')
        setPets(serverPets.data)
        setLoading(false)
    }catch(err){console.error(err)}
  }
  const handleDelete = ()=>{
    fetchPets()
  }
  React.useEffect(()=>{
    fetchPets()
  },[])
  return (
    <>
      <h1>Adoption Center</h1>
      <PetList isLoading = {isLoading} delete = {handleDelete} pets={pets} />
    </>
  )
}

export default Root;
