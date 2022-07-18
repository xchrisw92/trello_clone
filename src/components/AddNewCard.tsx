import {Button, Grid, TextField} from "@mui/material";
import React, {useState} from "react";

interface AddNewCardProps {
  handleAddCard: Function,
}

const AddNewCard: React.FC<AddNewCardProps> = ({handleAddCard}: AddNewCardProps): JSX.Element =>{
  const [cardInput, setCardInput] = useState('');

  const handleAddClick = () =>{
    handleAddCard(cardInput);
  }

  return (
      <Grid container sx={{paddingBottom: 2, paddingLeft: 2}}>
          <Grid item md={8}>
              <TextField
                  label={'Add New Card'}
                  id={'Add New Card'}
                  size={'small'}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCardInput(event.target.value)
                  }/>
          </Grid>
          <Grid item md={4}>
              <Button onClick={handleAddClick}>Add</Button>
          </Grid>
      </Grid>
  );
};
export default AddNewCard;