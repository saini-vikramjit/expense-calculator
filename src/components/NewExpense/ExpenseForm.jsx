import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [formInput, setFormInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const titleChangeHandler = (e) => {
        setFormInput((prevState) => {
            return {
                ...prevState,
                title: e.target.value,
            };
        });
    };

    const amountChangeHandler = (e) => {
        setFormInput((prevState) => {
            return {
                ...prevState,
                amount: e.target.value,
            };
        });
    };

    const dateChangeHandler = (e) => {
        setFormInput((prevState) => {
            return {
                ...prevState,
                date: e.target.value,
            };
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Clicked');
        console.dir(formInput);
    };

    const { title, amount, date } = formInput;

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2021-12-31" value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;