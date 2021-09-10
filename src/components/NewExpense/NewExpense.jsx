import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const { addExpense } = props;
    return (
        <div className="new-expense">
            <ExpenseForm
                addExpense={addExpense}
            />
        </div>
    );
};

export default NewExpense;