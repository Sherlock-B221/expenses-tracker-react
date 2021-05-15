import {ExpenseDate} from "./ExpenseDate";
import './ExpenseItem.css';
import {Card} from "../UI/Card";
import React from "react";

export const ExpenseItem = (props) => {
    return <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.price}</div>
        </div>
    </Card>
}