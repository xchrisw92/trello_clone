import {Button, Grid, IconButton, Paper, Typography} from "@mui/material";
import AddNewCard from "./AddNewCard";
import React, {useState} from "react";
import {Clear} from "@mui/icons-material";

interface ItemContainerProps {
  title: String,
  items?: Array<String>,
  handleAddCard: Function,

}

const ItemContainer: React.FC<ItemContainerProps> = ({
                                                       title,
                                                       items,
                                                       handleAddCard
                                                     }: ItemContainerProps): JSX.Element => {
  const [addCard, setAddCard] = useState(false);

  const handleAddNewCard = (item: String) => {
    handleAddCard(title, item);
    setAddCard(false);
  }

  const containerTitle = title.charAt(0).toUpperCase() + title.slice(1) + ' Iteration';

  return (
    <Paper elevation={6} sx={{padding: 2}}>
      <Grid container direction={'column'} spacing={2}>
        <Grid item>
          <Typography variant={'h6'}>{containerTitle}</Typography>
        </Grid>
        {
          items && items.map((item, i) => {
            return (
              <Grid item key={i}>{item}</Grid>
            )
          })
        }
        {
          addCard && <AddNewCard handleAddCard={handleAddNewCard}/>
        }
        <Grid container justifyContent={'space-between'} sx={{paddingLeft: 2}}>
          <Button variant={'contained'} size={'small'} onClick={() => setAddCard(!addCard)}>+ Add Another Card</Button>
          {addCard &&
              <IconButton aria-label={'close'} onClick={() => {setAddCard(false)}}>
                  <Clear/>
              </IconButton>
          }
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ItemContainer;