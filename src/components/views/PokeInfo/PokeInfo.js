import { useState } from 'react'
import FindPkmn from './FindPkmn'
import DataPkmn from './DataPkmn'
import MovesPkmn from './MovesPkmn'
import './style.css'

export default function PokeInfo(){
  const [pkmnData, setPkmnData] = useState(null);

  return(
    <div>
    <h1>PokeInfo</h1>
        <div className='ContentPokeInfo'>
          <FindPkmn pkmnData={pkmnData} setPkmnData={setPkmnData} />
          <DataPkmn pkmnData={pkmnData} />
          <MovesPkmn pkmnData={pkmnData} />
      </div>
    </div>
  )
}
