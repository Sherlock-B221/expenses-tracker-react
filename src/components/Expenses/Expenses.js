import React, {useState} from "react";

import {ExpenseItem} from "./ExpenseItem";
import {Card} from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

export const Expenses = (props) => {
    // console.log(props.expenseData);
    const [filteredYear, setFilteredYear] = useState('2020');
    // const result = props.expenseData.filter(expense => expense.date.getFullYear() === parseInt(filteredYear))
    // console.log(result)
    // const [filteredExpenses,setFilteredExpenses] = useState(props.expenseData.filter(expense => {
    //     const date = new Date(expense.date)
    //     return date.getFullYear() === parseInt(filteredYear)
    // }))
    const onYearChangeHandler = (year) => {
        setFilteredYear(year)
        // console.log(filteredYear)
        // setFilteredExpenses(props.expenseData.filter(expense => {
        //     const date = new Date(expense.date)
        //     return date.getFullYear() === parseInt(year)
        // }))
    }
    const filteredExpenses = props.expenseData.filter(expense => {
        console.log(expense.date)
        const date = new Date(expense.date)
        console.log(date, 'date')
        return date.getFullYear().toString() === filteredYear;
    })
    let expensesItemData = <p>No Expenses Found</p>
    if (filteredExpenses.length>0)
    {
        expensesItemData = filteredExpenses.map((expenses) =>
            <ExpenseItem key={expenses.id} title={expenses?.title} date={expenses?.date}
                         price={expenses?.amount}/>
        )
    }
    return <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler}/>
            {expensesItemData}
        </Card>
    </div>


}
