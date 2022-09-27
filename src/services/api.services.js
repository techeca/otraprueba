const api = 'https://pokeapi.co/api/v2/'

export function getPkmninfo(idPkmn){
  console.log(idPkmn)
  return fetch(`${api}pokemon/${idPkmn}`).then(res => res.json()).catch(err => handleError(err))
}

function handleError(error){
  console.error(error)
}

//https://pokeapi.co/api/v2/pokemon/{id or name}/
