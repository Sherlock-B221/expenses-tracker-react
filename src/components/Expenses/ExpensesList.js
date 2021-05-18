import {ExpenseItem} from "./ExpenseItem";
import './ExpensesList.css'
import React from "react";
//
// let expensesItemData = <p>No Expenses Found</p>
// if (filteredExpenses.length > 0) {
//     expensesItemData = filteredExpenses.map(
//     )
// }
export const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.items.map((expenses) =>
                <ExpenseItem key={expenses.id} title={expenses?.title} date={expenses?.date}
                             price={expenses?.amount}/>)}
        </ul>
    )
}