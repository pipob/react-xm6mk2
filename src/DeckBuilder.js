import React from "react";

let d = [
  {cid: 12346, cardId: 'd4k-001'},
  {cid: 12354, cardId: 'd4k-001'},
  {cid: 21546, cardId: 'd4k-001'},
  {cid: 74532, cardId: 'd4k-002'}
]
let s = [
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
export default function DeckBuilder() {
  const [deck, setDeck] = React.useState(d)


  return (
    <div class="row container">
      <DeckList deck={deck} />
      <SelectCard />
    </div>
  );
}

const DeckList = ({deck}) => {  
  let cardsId = deck.map(card => card.cardId)
  let list = cardsId.reduce((prev,curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev
  },{})
  let keys = Object.keys(list);
  let values = Object.values(list);

  return( 
    <div class="col-3 list-group">
      { 
        keys.map((cardId,i) => {
          return(<li class="list-group-item">{cardId+" - "+values[i]}</li>) 
        })
      }
    </div>
  )
}

const SelectCard = ({deck,setDeck}) => {  
  let cards = s;
  return(
    <div class="col-9">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        { 
          cards.map(card => {

            return(
              <div class="col my-2">
                <div class="card" >
                  <div class="card-body">
                    {card.cardId}
                  </div>    
                </div>   
              </div>     
            )
          }) 
        }
      </div>
    </div>
  )
}