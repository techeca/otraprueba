import './style.css'
export default function MovesPkmn({pkmnData}){

  return(
    <div className='CardPokeInfo'>
    {pkmnData ?
      <ul className='listaMoves'>
        {pkmnData.moves.map((m, i) =>
          <li key={i}>{m.move.name}</li>
        )}
      </ul>
      :
      <p>No data</p>
    }
    </div>
  )
}
