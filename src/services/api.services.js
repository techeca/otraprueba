const api = 'https://pokeapi.co/api/v2/'

export function getPkmninfo({idPkmn = '1'}){
  return fetch(`${api}pokemon/${idPkmn}`).then(res => res.json())
}

//https://pokeapi.co/api/v2/pokemon/{id or name}/
