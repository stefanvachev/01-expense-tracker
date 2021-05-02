import './ExpenseForm.css'
import React, { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //we can also set state as a single object  but individual state slices are better.
    // As each field changes from our various handlers,
    //we need to ensure we preserve the other fields by copying the previous user input.

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    //react will make sure ww get event automatically since the method is being passed as an onChange event handler.
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);

        //alternative option with single state
        // setUserInput( (prevState) => { //must use a function since we depend on previous state!!!
        //     return( {
        //         ...prevState,
        //         enteredTitle: event.target.value //this overrides that one specific property.
        //     });
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault(); //we will handle the event in java script so we want to disable to form submission to the server. Default JS to prevent page reload.

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, //hande as number, not string.
            date: new Date(enteredDate)

        };

        props.onSaveExpenseData(expenseData);//this is how child component communicates up to parent component
        //Clear the form after submission.
        setEnteredDate('');
        setEnteredAmount('');
        setEnteredTitle('');

    }

    //Two Way Binding - we bind the value of the input to the state variable, and also use the change handler to get the value typed by the user.
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;