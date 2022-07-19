import {fireEvent, render, screen} from '@testing-library/react';
import React from "react";
import ItemContainer from "../components/ItemContainer";

describe('Current Iteration', ()=>{

  const setItems = jest.fn();
  const initialItemList = ['Go poop', 'Go pee', 'eat lunch'];
  const defaultTitle = 'Current Iteration';

  const renderItemContainer = (title: String, items?: Array<String>) =>{
    render(
      <ItemContainer title={title} items={items} handleAddCard={setItems} />
    )
  };

  it('should display the correct title', ()=>{
    // arrange
    renderItemContainer(defaultTitle);
    // act

    // assert
    expect(screen.getByText(/Current Iteration/i)).toBeInTheDocument();
  });

  it('should display items in the current iteration', () =>{
    // arrange
    renderItemContainer(defaultTitle, initialItemList);
    // assert
    expect(screen.getByText('eat lunch')).toBeInTheDocument();
  });

  it('should display a button to add another item', ()=>{
    // arrange
    renderItemContainer(defaultTitle);
    // act

    // assert
    expect(screen.getByRole('button', {name: '+ Add a card'})).toBeInTheDocument();
  });

  it('should allow input of a new card', async ()=>{
    // arrange
    renderItemContainer(defaultTitle);
    const addCard = screen.getByRole('button', {name: '+ Add a card'});
    // act
    fireEvent.click(addCard);
    // assert
    await expect(screen.getByLabelText('Add New Card')).toBeInTheDocument();
  });

  it('should add a new card', async () =>{
    // arrange
    const items: Array<String> = ['go poo'];
    renderItemContainer(defaultTitle, items);
    const addCard = screen.getByRole('button', {name: '+ Add a card'});
    const newCardTitle = 'Go pee';

    // act
    fireEvent.click(addCard);
    const inputCardText = screen.getByLabelText('Add New Card');
    fireEvent.change(inputCardText,{target: {value: newCardTitle}});
    expect(screen.getByDisplayValue(newCardTitle)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {name: 'Add'}));

    // assert
    expect(setItems).toHaveBeenCalled();
    expect(screen.queryByText(/Add New Card/i)).toBeNull();
  });

  it('should close out of Add New Card when X is clicked', () =>{
    // arrange
    renderItemContainer(defaultTitle);
    // act
    fireEvent.click(screen.getByRole('button', {name: '+ Add a card'}));
    fireEvent.click(screen.getByRole('button', {name: 'close'}));
    // assert
    expect(screen.queryByLabelText('Add New Card')).not.toBeInTheDocument();
  });
})