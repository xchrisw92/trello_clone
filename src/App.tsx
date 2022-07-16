import React, {useState} from 'react';
import './App.css';
import ItemContainer from "./components/ItemContainer";

const App = () => {
const [items, setItems] = useState<Array<String>>([]);

  return (
    <div>
      <ItemContainer items = {items} setItems={setItems} />
    </div>
  );
}

export default App;
