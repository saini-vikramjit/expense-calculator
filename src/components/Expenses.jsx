import ExpenseItem from "./ExpenseItem";
import Card from './Card';

function Expenses(props) {
    const { expenses } = props;
    return (
        <Card>
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
}

export default Expenses;