import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

function ExpensesList(props) {

    const expenses = props.expenses;


    //In a functional component, we can return a differen JSX from an if statement if we want, without reaching the
    //main return at the bottom.
    if ( expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {expenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title} amount={expense.amount} date={expense.date}/>
            )
            }
        </ul>
    );
}

export default ExpensesList;