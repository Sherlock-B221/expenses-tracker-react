import React from 'react';
import './ExpenseDate.css';

export const ExpenseDate = (props) => {
    // console.log(props.date)
    const dateTemp = new Date(props.date)
    const month = dateTemp.toLocaleString('en-US',{month: 'long'})
    const day = dateTemp.toLocaleString('en-US',{day: '2-digit'})
    const year = dateTemp.getFullYear();
    return <div className='expense-date'>
        <div className='expense-date__year'>
            {year}
        </div>
        <div className='expense-date__day'>
            {day}
        </div>
        <div className='expense-date__month'>
            {month}
        </div>

    </div>
}