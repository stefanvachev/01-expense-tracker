import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        stopEditingHandler();
    };


    //we use props to pass data from parent to child component
    function startEditingHandler() {
        setIsEditing(true);
    }

    function stopEditingHandler() {
        setIsEditing(false);
    }


    //and we pass functions that a child component can call in order to return data to the parent.
    return (
        <div className="new-expense">
            {!isEditing ? (<button onClick={startEditingHandler}>Add New Expense</button>)
                : (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>)
            }
        </div>
    );

};

export default NewExpense;