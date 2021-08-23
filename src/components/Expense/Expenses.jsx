import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
    const { expenses } = props;
    return (
        <Card className="expenses">
            {expenses.map(({id, title, amount, date}) => {
                return (
                    <ExpenseItem
                        key={id}
                        title={title}
                        amount={amount}
                        date={date}
                    />
                );
            })}
        </Card>
    );
};

export default Expenses;