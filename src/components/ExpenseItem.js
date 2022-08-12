import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__month">{year}</div>
        <div className="expense-date__month">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
