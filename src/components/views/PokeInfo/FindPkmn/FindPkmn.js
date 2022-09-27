import { useState } from 'react'
import './style.css'
import { getPkmninfo } from '../../../../services/api.services.js'
import ImagePkmn from './ImagePkmn'

export default function FindPkmn({pkmnData, setPkmnData}){
  //const [pkmnData, setPkmnData] = useState(null);

  function handleChangeIdName(e){
    if(e.target.value === '')
    {
      setPkmnData(null)
    }else {
      getPkmninfo(e.target.value).then(res => setPkmnData(res))
      console.log(pkmnData)
    }
  }

  return (
    <div className='CardPokeInfo'>
      <label>Id/Name Pkmn</label>
      <form>
          <input id='idNamePkmn' type='number' onChange={e => handleChangeIdName(e)} />
      </form>
      <ImagePkmn pkmnData={pkmnData} />
      {pkmnData ? <p>Pkmn Encontrado!! {console.log(pkmnData)}</p> : <p>nones</p>}
    </div>
  )
}
