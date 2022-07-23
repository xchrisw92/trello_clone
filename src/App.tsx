import React, {useState} from 'react';
import './App.css';
import {Container, CssBaseline, Grid} from "@mui/material";
import ItemContainer from "./components/ItemContainer";

export type Item = {
  [key: string]: string[]
}

const App: React.FC<Item> = (): JSX.Element => {

  const [items, setItems] = useState<Item>({current: [], future: [], completed: []});

  const handleMoveCard: Function = (fromCategory: string, targetCategory: string): void =>{
    const itemInfo = fromCategory.split("_");
    const prevItems = {...items};
    const itemCategory = Object.keys(prevItems).find(key => key === itemInfo[0]);
    if(itemCategory && targetCategory){
      const movedItem = prevItems[itemCategory].splice(Number(itemInfo[1]), 1);
      movedItem && prevItems[targetCategory].push(movedItem[0]);
      setItems(prevItems);
    } else {
      alert('Move item not completed');
    }
  };

  const handleDeleteCard: Function = (id: string): void => {
    const itemInfo = id.split("_");
    const itemCategory = Object.keys(items).find(key => key === itemInfo[0]);
    if(itemCategory){
      const newItems = items[itemCategory];
      newItems.splice(Number(id[1]), 1);
      setItems({...items, newItems});
    }else {
      alert('Could not complete');
    }
  };

  const addItems: Function = (title: String, item: string) => {
    const prevItems = {...items};
    const itemCategory = Object.keys(prevItems).find(key => key === title);
    if (itemCategory) {
      prevItems[itemCategory].push(item);
      setItems(prevItems);
    } else {
      alert('Could not complete');
    }
  };

  return (
    <CssBaseline>
      <Container maxWidth={"md"} sx={{padding: 10}}>
        <Grid container spacing={2} justifyContent={'space-around'} alignItems={'Center'}>
          <ItemContainer title={'current'} items={items.current} handleAddCard={addItems}
                         handleDeleteCard={handleDeleteCard} handleMoveCard={handleMoveCard}/>
          <ItemContainer title={'future'} items={items.future} handleAddCard={addItems}
                         handleDeleteCard={handleDeleteCard} handleMoveCard={handleMoveCard}/>
          <ItemContainer title={'completed'} items={items.completed} handleAddCard={addItems}
                         handleDeleteCard={handleDeleteCard} handleMoveCard={handleMoveCard}/>
        </Grid>
      </Container>
    </CssBaseline>
  );
};

export default App;
