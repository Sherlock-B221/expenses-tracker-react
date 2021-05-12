import React from 'react';
import {Expenses} from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const addExpenseHandler = (expenseData) => {
        console.log('in app.js',expenseData)
    }
    return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses />
    </div>
  );
}

export default App;
