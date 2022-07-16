import React, {useState} from 'react';
import './App.css';
import {Container, CssBaseline, Grid} from "@mui/material";
import ItemContainer from "./components/ItemContainer";

const App = () => {

  type itemObject = {
    current: Array<String>,
    future: Array<String>,
    completed: Array<String>,
  }

const [items, setItems] = useState<itemObject>({current: [''], future:  [''], completed: ['']});

  const addItems = (key: String, item: String) =>{
    let newItems = {...items};
    switch (key) {
      case 'current':
        newItems.current.push(item);
        break;
      case 'future':
        newItems.future.push(item);
        break;
      case 'completed':
        newItems.completed.push(item);
        break;
      default:
        break;
    }
    setItems(newItems);
  }

  return (
    <CssBaseline>
      <Container maxWidth={"md"} sx={{padding: 10}}>
        <Grid container spacing={2} justifyContent={'space-around'} alignItems={'Center'}>
          <ItemContainer title={'current'} items={items.current} handleAddCard={addItems}/>
          <ItemContainer title={'future'} items={items.future} handleAddCard={addItems} />
          <ItemContainer title={'completed'} items={items.completed} handleAddCard={addItems} />
        </Grid>
      </Container>
    </CssBaseline>
  );
}

export default App;
