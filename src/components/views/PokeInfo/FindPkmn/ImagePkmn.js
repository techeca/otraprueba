export default function ImagePkmnn({pkmnData}){
  return(
    <>
      {pkmnData ?
        <img src={pkmnData.sprites.front_default} />
        :
        <img src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Icon-round-Question_mark.svg' />
      }
    </>
  )
}
