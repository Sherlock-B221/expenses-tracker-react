import {ExpenseItem} from "./ExpenseItem";
import React from "react";
import './Expenses.css';
import {Card} from "../UI/Card";

export const Expenses = () => {
    return <Card className='expenses'>
        <ExpenseItem title="Car Insurance" date={new Date(2021,3,3)} price="3000"/>
        <ExpenseItem title="Car Insurance" date={new Date(2021,3,3)} price="3000"/>
        <ExpenseItem title="Car Insurance" date={new Date(2021,3,3)} price="3000"/>
    </Card>


}