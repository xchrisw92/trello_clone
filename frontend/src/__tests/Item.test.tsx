import Item from "../components/Item";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";

describe('Item', ()=>{

  const mockHandleDeleteCard = jest.fn();
  const renderItem =(id: string, title: string) =>{
    render(
      <Item id={id} title={title} handleDeleteCard={mockHandleDeleteCard}/>
    )
  };

  afterEach(() =>{
    cleanup();
  })

  it('should render with item value', ()=>{
    renderItem('completed_2', 'Go poo');

    expect(screen.getByText('Go poo')).toBeInTheDocument();
  });

  it('shows a close button for the Item',  ()=>{
    // Arrange
    renderItem('testId', 'testTitle');
    const deleteItem = screen.getByRole('button', {name: /delete/i});
    expect(deleteItem).toBeInTheDocument();
    expect(screen.getByText('testTitle')).toBeInTheDocument();
    // Act
    fireEvent.click(deleteItem);
    // Assert
    expect(mockHandleDeleteCard).toHaveBeenCalled();
  })
});