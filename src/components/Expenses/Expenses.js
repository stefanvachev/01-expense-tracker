import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {



    //useState must be called inside a functional component, and can't be nested in another function within the component
    //returns an array, first element is the value of ht variable, the second is a function to update it.
    //we use array destructuring to get these returned values assigned to variables.
    //Since setFilteredYear is a react state aware function, when that function is called, react will re-render the impacted component.
    const [filteredYear, setFilteredYear] = useState('2020'); //convention name the value being returned, and then name the function with setValue prefix.
    //using a const for title it ok, it just locks the pointer to another variable managed by react setTitle function. React can change the variable's value.
    //this function (ExpenseItem) re-executes every time the clickHandler is fired and react gives us a new state.
    //react knows the difference between first time a component is rendered, and in this use useState will initialize with props.title, but
    //when we later change the state using the setTitle method react will not re-initialize the state when it encounteres the useState hook. It will just grab the latest state and give it to us.

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() ===  filteredYear);

    const setExpensesFilterHandler = (filterValue) => {
        setFilteredYear(filterValue);
        console.log("filter value:", filterValue);
    };


    return (
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSetFilter = {setExpensesFilterHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
    );
}

export default Expenses;