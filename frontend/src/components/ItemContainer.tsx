import {Button, IconButton, Paper, Stack, Typography} from "@mui/material";
import AddNewCard from "./AddNewCard";
import React, {useState} from "react";
import {Clear} from "@mui/icons-material";
import Item from "./Item";

interface ItemContainerProps {
  title: string,
  items?: Array<string>,
  handleAddCard: Function,
  handleDeleteCard: Function,
  handleMoveCard: Function
}

const ItemContainer: React.FC<ItemContainerProps> = ({
                                                       title,
                                                       items,
                                                       handleAddCard,
                                                       handleDeleteCard,
                                                       handleMoveCard
                                                     }: ItemContainerProps): JSX.Element => {
  const [addCard, setAddCard] = useState(false);

  const handleAddNewCard: Function = (item: String): void => {
    handleAddCard(title, item);
    setAddCard(false);
  }

  const drop: Function = (event: React.DragEvent): void => {
    event.preventDefault();
    const child = event.dataTransfer.getData('elementId');
    handleMoveCard(child, event.currentTarget.id);
  };

  const allowDrop: Function = (event: React.SyntheticEvent): void => {
    event.preventDefault();
  };

  const containerTitle: string = title.charAt(0).toUpperCase() + title.slice(1) + ' Iteration';

  return (
    <Paper id={title} elevation={6} sx={{padding: 2}} onDrop={event => drop(event)}
           onDragOver={event => allowDrop(event)}>
      <Stack spacing={2}>
        <Typography variant={'h6'}>{containerTitle}</Typography>
        {
          items && items.map((item: string, i: number) => {
            return (
              <Item key={i} id={`${title}_${i}`} title={item} handleDeleteCard={handleDeleteCard}/>
            )
          })
        }
        {
          addCard && <AddNewCard handleAddCard={handleAddNewCard}/>
        }
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Button variant={'text'} onClick={() => setAddCard(!addCard)}>+ Add a card</Button>
          {addCard &&
              <IconButton aria-label={'close'} onClick={() => {
                setAddCard(false)
              }}>
                  <Clear/>
              </IconButton>
          }
        </Stack>
      </Stack>
    </Paper>
  );
};
export default ItemContainer;