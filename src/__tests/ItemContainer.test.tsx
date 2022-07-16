import ItemContainer from "../components/ItemContainer";
import {fireEvent, render, screen} from '@testing-library/react';
import React from "react";

describe('Current Iteration', ()=>{

  const setItems = jest.fn();
  const initialItemList = ['Go poop', 'Go pee', 'eat lunch'];


  const renderCurrentIteration = (items?: Array<String>) =>{
    render(
      <ItemContainer items={items} setItems={setItems} />
    )
  };

  it('should display the correct title', ()=>{
    // arrange
    renderCurrentIteration();
    // act

    // assert
    expect(screen.getByText(/Current Iteration/i)).toBeInTheDocument();
  });

  it('should display items in the current iteration', () =>{
    // arrange
    renderCurrentIteration(initialItemList);
    // assert
    expect(screen.getByText(/eat lunch/i)).toBeInTheDocument();
  });

  it('should display a button to add another item', ()=>{
    // arrange
    renderCurrentIteration();
    // act

    // assert
    expect(screen.getByRole('button', {name: '+ Add Another Card'})).toBeInTheDocument();
  });
  it('should allow input of a new card', async ()=>{
    // arrange
    renderCurrentIteration();
    const addCard = screen.getByRole('button', {name: '+ Add Another Card'});
    // act
    fireEvent.click(addCard);
    // assert
    await expect(screen.findByRole('input', {name: 'Add New Card'}));
  });

  it('should add a new card', async () =>{
    // arrange
    const items: Array<String> = ['go poo'];
    renderCurrentIteration(items);
    const addCard = screen.getByRole('button', {name: '+ Add Another Card'});
    const newCardTitle = 'Go pee';

    // act
    fireEvent.click(addCard);
    const inputCardText = screen.getByLabelText('Add Card');
    fireEvent.change(inputCardText,{target: {value: newCardTitle}});
    expect(screen.getByDisplayValue(newCardTitle)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {name: 'Add'}));

    // assert
    expect(setItems).toHaveBeenCalled();
    expect(screen.queryByText(/Add New Card/i)).toBeNull();
  })
})