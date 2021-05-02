import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
    { id: 'e1', title: 'Car insurance', amount: 123.45, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'Other expense', amount: 235.45, date: new Date(2021, 2, 29) },
    { id: 'e3', title: 'Other expense', amount: 12.45, date: new Date(2020, 2, 29) }
];

const App = () => {

    const [expenses, setExpenses] = useState(dummyExpenses);

    const addExpenseHandler = expense => {
        console.log('App.js', expense);
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]});
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
