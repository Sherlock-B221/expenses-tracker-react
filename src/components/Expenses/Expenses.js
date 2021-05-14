import React, {useCallback, useEffect, useState} from "react";

import {ExpenseItem} from "./ExpenseItem";
import {Card} from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

export const Expenses = (props) => {
    // console.log(props.expenseData);
    const [filteredYear, setFilteredYear] = useState('2020');
    const onYearChangeHandler = (year) => {
        setFilteredYear(year)
    }
    return <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler}/>
            {props.expenseData.map((expenses,idx) =>
                <ExpenseItem key={idx} title={expenses?.title} date={expenses?.date} price={expenses?.amount}/>
            )}
        </Card>
    </div>


}