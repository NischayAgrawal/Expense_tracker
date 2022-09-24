import React ,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./NewExpense/ExpenseFilter";

function Expenses(props) {
  const [filteredYear,setFilteredYear]= useState('2022')
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear}onChangeFilter={filterChangeHandler}/>
      {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </div>
  );
}

export default Expenses;
