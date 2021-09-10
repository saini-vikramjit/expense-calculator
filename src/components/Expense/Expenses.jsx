import React, { useState } from 'react';

import ExpenseList from "./ExpenseList";
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('2021');

    const onSelectedFilterHandler = (e) => {
        setSelectedFilter(e.target.value);
    };

    const { expenses } = props;
    const expenseItems = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedFilter;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter
                selectedFilter={selectedFilter}
                onSelectedFilterHandler={onSelectedFilterHandler}
            />
            <ExpenseList
                expenseItems={expenseItems}
            />
        </Card>
    );
};

export default Expenses;