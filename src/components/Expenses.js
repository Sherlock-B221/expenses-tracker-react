import {ExpenseItem} from "./ExpenseItem";
import React from "react";
import './Expenses.css';

export const Expenses = () => {
    return <div className='expenses'>
        <ExpenseItem title="Car Insurance" date={new Date(2021,3,3)} price="3000"/>
        <ExpenseItem title="Car Insurance" date={new Date(2021,3,3)} price="3000"/>
        <ExpenseItem title="Car Insurance" date={new Date(2021,3,3)} price="3000"/>
    </div>


}