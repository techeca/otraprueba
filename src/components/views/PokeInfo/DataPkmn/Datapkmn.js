import './style.css'

export default function DataPkmn({pkmnData}){
  const statsStr = ['HP','ATK','DEF','SPATK','SPDEF','SPD',]

  return(
    <div className='CardPokeInfo'>
    {pkmnData ?
      <>
        <label className='infoPkmn'>Name: <span className='dataInfo'>{pkmnData.name}</span></label>
        <label className='infoPkmn'>Height: <span className='dataInfo'>{pkmnData.height}</span></label>
        <label className='infoPkmn'>Weight: <span className='dataInfo'>{pkmnData.weight}</span></label>
        <ul className='types'>
        {pkmnData.types.map(t =>
            <li key={t.type.name}>{t.type.name}</li>
        )}
        </ul>
        <hr width='100%' />
        {pkmnData.stats.map(s =>
          <div key={s.stat.name} className='statInfo'>
            <h5>{s.stat.name} - {s.base_stat}</h5>
            <progress max='255' value={s.base_stat}></progress>
          </div>
        )}
      </>
      :
      <p>No data</p>
    }
    </div>
  )
}
