import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);              
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })   

    // let expensesContent = <p>No expenses found.</p>;
    // if(props.items.length > 0) {
    //     expensesContent = props.items.map(expense => <ExpenseItem 
    //         key={expense.id}
    //         title={expense.title}
    //         amount={expense.amount}
    //         date={expense.date}
    //     />)
    // }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                {/* {filteredExpenses.length === 0 ? (<p>No Expenses found.</p>) : (filteredExpenses.map(expense => <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />))}                 */}

                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)} */}
                <ExpensesChart expenses={filteredExpenses} />
                {<ExpensesList items={filteredExpenses} />}
            </Card>
        </div>
    );
}

export default Expenses;