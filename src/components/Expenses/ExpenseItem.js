import {ExpenseDate} from "./ExpenseDate";
import './ExpenseItem.css';
import {Card} from "../UI/Card";
import React, { useState } from "react";

export const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title);

    const changeTitleHandler = () => {
        if(title==='Updated!')
        {
            setTitle('henlo')
        }
        else

        setTitle('Updated!')
    }
    return <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.price}</div>
        </div>
        <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
}