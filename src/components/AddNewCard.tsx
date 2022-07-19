import {Button, Grid, TextField} from "@mui/material";
import React, {KeyboardEventHandler, useState} from "react";

interface AddNewCardProps {
  handleAddCard: Function,
}

const AddNewCard: React.FC<AddNewCardProps> = ({handleAddCard}: AddNewCardProps): JSX.Element => {
  const [cardInput, setCardInput] = useState('');

  const handleAddClick = (key: string) => {
    if (key == 'Enter') {
      handleAddCard(cardInput);
    }
  }

  return (
    <Grid container sx={{paddingBottom: 2, paddingLeft: 2}}>
      <Grid item md={12}>
        <TextField
          label={'Enter a title for this card...'}
          id={'Add New Card'}
          margin={'normal'}
          multiline
          rows={4}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCardInput(event.target.value)}
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => handleAddClick(event.key)}
        />
      </Grid>
    </Grid>
  );
};
export default AddNewCard;