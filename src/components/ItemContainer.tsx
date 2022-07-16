import React, {useState} from "react";

interface CurrentIterationProps {
  items?: Array<String>,
  setItems: Function,
}

const ItemContainer: React.FC<CurrentIterationProps> = ({items, setItems}: CurrentIterationProps): JSX.Element =>{
  const [addCard, setAddCard] = useState(false);
  const [cardInput, setCardInput] = useState<string>('');

  const handleAddCard = () =>{
    setItems((items: Array<String>) => [...items, cardInput]);
    setAddCard(false);
  }

  return (
    <div>
      <h1>Current Iteration</h1>
      {
        items && items.map((item, i) =>{
          return(
            <h6 key={i}>{item}</h6>
          )
        })
      }
      {
        addCard && <div>
          <label htmlFor={"Add New Card"}>Add Card</label>
          <input type={"text"} id={"Add New Card"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCardInput(event.target.value)
          }/>
          <button onClick={handleAddCard}>Add</button>
          </div>
      }
      <button onClick={() => setAddCard(!addCard)}>+ Add Another Card</button>
    </div>
  )
};
export default ItemContainer;