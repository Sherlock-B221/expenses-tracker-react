import React, {useState} from 'react';
import {Expenses} from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const dummyExpenses = []
    // console.log('here', dummyExpenses[0].date)
    const [expenses, setExpenses] = useState(dummyExpenses);
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenseData={expenses}/>
    </div>
  );
}

export default App;
