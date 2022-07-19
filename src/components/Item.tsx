import React from "react";
import Draggable from "react-draggable";

interface ItemProps {
  key?: number,
  title?: string,
}

const Item: React.FC<ItemProps> = ({key, title}: ItemProps): JSX.Element => {
  return(
    <Draggable>
      <div>I can be moved! </div>
    </Draggable>
  );
};
export default Item;