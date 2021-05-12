import React, {useState} from "react";

import {ExpenseItem} from "./ExpenseItem";
import {Card} from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

export const Expenses = () => {
    const [filteredYear,setFilteredYear] = useState('2020');
    const onYearChangeHandler = (year) => {
        setFilteredYear(year)
    }
    return <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onYearChange = {onYearChangeHandler}/>
            <ExpenseItem title="Car Insurance" date={new Date(2021,3,3)} price="3000"/>
            <ExpenseItem title="Car Insurance" date={new Date(2021,3,3)} price="3000"/>
            <ExpenseItem title="Car Insurance" date={new Date(2021,3,3)} price="3000"/>
        </Card>
    </div>


}