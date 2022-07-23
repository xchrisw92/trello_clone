import React from "react";
import {Card, Grid, IconButton, Typography} from "@mui/material";
import {Clear} from "@mui/icons-material";

interface ItemProps {
  id: string,
  title: string,
  handleDeleteCard: Function
}

const Item: React.FC<ItemProps> = ({id, title, handleDeleteCard}: ItemProps): JSX.Element => {

  const drag: Function = (event: React.DragEvent): void => {
    event.dataTransfer.setData('elementId', event.currentTarget.id);
  };

  return (
    <Card id={id} draggable={true} onDragStart={(event) => drag(event)} sx={{":hover": {cursor: 'pointer'}}}>
      <Grid container direction={'row'} alignItems={'center'} justifyContent={'space-around'}>
        <Grid item>
        <Typography variant={'body1'} >{title}</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => handleDeleteCard(id)} aria-label={'delete'}>
            <Clear/>
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Item;