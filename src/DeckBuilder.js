import React from "react";

let d = [
  {cid: 12346, cardId: 'd4k-001'},
  {cid: 12354, cardId: 'd4k-001'},
  {cid: 21546, cardId: 'd4k-001'},
  {cid: 74532, cardId: 'd4k-002'}
]
let d4k = [
  {cardId: 'd4k-001'},
  {cardId: 'd4k-002'},
  {cardId: 'd4k-003'},
  {cardId: 'd4k-004'},
  {cardId: 'd4k-005'},
  {cardId: 'd4k-006'},
  {cardId: 'd4k-007'},
  {cardId: 'd4k-008'},
  {cardId: 'd4k-009'},
  {cardId: 'd4k-010'}
]

let exg = [
  {cardId: 'exigency-001'},
  {cardId: 'exigency-002'},
  {cardId: 'exigency-003'},
  {cardId: 'exigency-004'},
  {cardId: 'exigency-005'},
  {cardId: 'exigency-006'},
  {cardId: 'exigency-007'}
]

export default function DeckBuilder() {
  const [deck, setDeck] = React.useState(d)
  React.useEffect(() => {

  },[deck])

  return (
    <div className="row">
      
      <DeckList deck={deck} />
      <SelectAllCard deck={deck} setDeck={setDeck}/>
    </div>
  );
}






const DeckList = ({deck}) => {  
  let cardsId = deck.map(card => card.cardId)
  let list = cardsId.reduce((prev,curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev
  },{})
  let cardslist = Object.keys(list).sort().reduce((obj,key) => {
    obj[key] = list[key]
    return obj
  },{});
  let keys = Object.keys(cardslist);
  let values = Object.values(cardslist);

  return( 
    <div className="col-3">
      <div>
        <button className="m-1 btn btn-success">Save</button>
        <button className="m-1 btn btn-secondary">Cancel</button>
      </div>
      <div className="list-group">
        { 
          keys.map((cardId,i) => {
            return(<li key={cardId} className="list-group-item">{cardId+" - "+values[i]}</li>) 
          })
        }
      </div>

    </div>
  )
}

const SelectAllCard = ({deck,setDeck}) => {
  const [cardSet, setCardSet] = React.useState('d4k') 
  let allcards = eval(cardSet);
  return(
    <div className="col-9">
      <CardSetList setCardSet={setCardSet} />
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        { allcards.map(card => 
          <SelectCard key={card.cardId} card={card} deck={deck} setDeck={setDeck} />) }
      </div>
    </div>
  )
}

const CardSetList = ({setCardSet}) => {
  return(
    <div className="col-12">
      <CardSetButton name="Dividing of 4 Kingdoms" setId="d4k" setCardSet={setCardSet}/>
      <CardSetButton name="Exigency" setId="exg" setCardSet={setCardSet}/>
    </div>
  )
}

const CardSetButton = ({name,setId,setCardSet}) => {
  return(
    <button className="m-1 btn btn-outline-secondary" 
      onClick={() => {
        setCardSet(setId)
      }}>{name}</button>
  )
}


const SelectCard = ({card,deck,setDeck}) => {
  let max = 4;
  let number = deck.filter(c => c.cardId == card.cardId).length
  let addbutton = (number < max)?"btn-outline-primary":"btn-outline-secondary"
  let removebutton = (number > 0)?"btn-outline-danger":"btn-outline-secondary"

  return(
    <div className="my-2">
      <div className="card" >
        <img />
        <div className="card-body">
          <p>{card.cardId}</p>
          <button className={"mx-1 btn btn-sm "+addbutton} onClick={() => {
            if(number < max) setDeck([...deck,{cid: 1234679, cardId: card.cardId}])
          }}>Add</button>
          <button className={"mx-1 btn btn-sm "+removebutton} onClick={() => {
            let index = deck.findIndex(c => c.cardId == card.cardId)
            if(index>=0) {
              deck.splice(index,1)
              setDeck([...deck])
            }
          }}>Remove</button>
        </div>    
      </div>   
    </div>   
  )
}