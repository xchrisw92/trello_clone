import {Stack, TextField} from "@mui/material";
import React, {useState} from "react";

interface AddNewCardProps {
  handleAddCard: Function,
}

const AddNewCard: React.FC<AddNewCardProps> = ({handleAddCard}: AddNewCardProps): JSX.Element => {
  const [cardInput, setCardInput] = useState('');

  const handleAddClick = (key: string) => {
    if (key === 'Enter') {
      handleAddCard(cardInput);
    }
  }

  return (
    <Stack>
      <TextField
        label={'Enter a title for this card...'}
        id={'Add New Card'}
        margin={'normal'}
        multiline
        rows={4}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCardInput(event.target.value)}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => handleAddClick(event.key)}
      />
    </Stack>

  );
};
export default AddNewCard;