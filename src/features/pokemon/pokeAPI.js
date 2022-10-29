import axios from "axios";

// A mock function to mimic making an async request for data
export const pokeAPI = async (term) => {
  
  try{
    const response  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    return {
      responseStatus: 200,
      pokemonData:response.data 
    };
  }catch(error){
    return {
      responseStatus: error.response.status,
      pokemonData:{} 
    }
  }
}
