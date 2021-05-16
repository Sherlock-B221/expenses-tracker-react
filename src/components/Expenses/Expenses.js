import React, {useState} from "react";

import {ExpenseItem} from "./ExpenseItem";
import {Card} from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import {ExpensesList} from "./ExpensesList";

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
        const date = new Date(expense.date)
        return date.getFullYear().toString() === filteredYear;
    })
    return <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    </div>


}
