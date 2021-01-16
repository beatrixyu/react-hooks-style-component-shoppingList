import React, {useState} from 'react';
import StyledCard from '../UI/MainCard'
import './ShoppingListForm.css';

import styled from 'styled-components'
import MainButton from '../UI/MainButton';
import LoadingIndicator from '../UI/LoadingIndicator'

const Input = styled.input`
background: papayawhip;
`

const aVar = 'shopping list item value'

const IngredientForm = React.memo(props => {
 // const [inputState, setInputState] = useState({ title: '', amount: '' })
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  console.log('shoppinglist form rendering')

  const submitHandler = event => {
    event.preventDefault();
    //console.log(inputState.title, inputState.amount)
    console.log(enteredTitle, enteredAmount)
    props.onAddNewItemHandler({title: enteredTitle, amount: enteredAmount}) //will hold and pooint the shopping items in the shoppingitem.js file
    // to deliver the value from here to the parent component which is ShoppingNote.js...
  };

const inputRef = React.createRef()


  return (
    <section className="ingredient-form">
      <StyledCard>
        <h1>Shopping List Form</h1>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            {/* htmlFor: Return Value:	A String, representing the id of the element the label is bound to */}
            <input
              type="text"
              id="title"
              value={enteredTitle}
              ref={inputRef}
              onMouseEnter={() => {
                inputRef.current.focus()
              }}
              //value={inputState.title}
                // onChange={
              //   (event) => {
              //     const newTitle = event.target.value;
              //     inputState[0](
              //       prevInputState => (
              //         {
              //           title: newTitle,
              //           amount: prevInputState.amount
              //         }
              //       )
              //     )
              //   }
              // }
            //   onChange={event => {
            //   const newTitle = event.target.value;
            //   setInputState(
            //     (prevInputState) => (
            //       {
            //         title: newTitle,
            //         amount: prevInputState.amount
            //       }
            //     ))
            // }} 
              onChange={event => {
                setEnteredTitle(event.target.value)
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              //value={inputState.amount}
              value={enteredAmount}
              // onChange={event => inputState[1]({ amount: event.target.value, title: inputState[0].title })}/>
              // onChange={event => inputState[1](() => (()=>({ amount: event.target.value, title: inputState[0].title })))} />

              // onChange={event => {
              //   const newTargetAmount = event.target.value;
              //   setInputState(prevInputState => ({ amount: newTargetAmount, title: prevInputState.title }))
              // }
              // }
              onChange={
                event => {
                  setEnteredAmount(event.target.value)
                }}
              /> 
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Shopping Items</button>

            {/* {props.loading ? <LoadingIndicator /> : null} */}
            {/* if loading is ture from the parent component shoppingNote, then the loadingIndicator is running  */}
            {props.loading && <LoadingIndicator />} 
            {/* we use && to shorten the conditional statement above */}
            
          </div>
        </form>
      </StyledCard>
    </section>
  );
});

export default IngredientForm;
