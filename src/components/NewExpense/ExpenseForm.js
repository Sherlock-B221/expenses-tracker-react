import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    // const [enteredDetails, setEnteredDetails] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })
    // const titleChangeHandler = (event) => {
    //     setEnteredDetails((prevState) => {
    //         return {
    //             ...prevState,
    //             title: event.target.value
    //         }
    //     });
    // }
    // const amountChangeHandler = (event) => {
    //     setEnteredDetails({
    //         ...enteredDetails,
    //         amount: event.target.value
    //     })
    // }
    // const dateChangeHandler = (event) => {
    //     setEnteredDetails({
    //         ...enteredDetails,
    //         date: event.target.value
    //     })
    // }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredDate('');
        setEnteredAmount('');
        setEnteredTitle('');
    };
    const [addNewExpense,setAddNewExpense]=useState(false);
    const setAddNewExpenseHandler = () => {
        setAddNewExpense(!addNewExpense);
    }

    return addNewExpense?<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01"
                       onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31"
                       onChange={dateChangeHandler}/>
            </div>
            <div  className="new-expense__actions">
                <button onClick={setAddNewExpenseHandler} type="submit">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
        : <div >
            <button onClick={setAddNewExpenseHandler} type="submit">Add New Expense</button>
        </div>
}
export default ExpenseForm;