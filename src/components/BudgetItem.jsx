const BudgetItem = ({ expense }) => {
  return (
    <li className="budget-item">
      <p className="item-name">
        {expense.description} {expense.isImportant && "❗"}
      </p>
      <p className="item-amount">${expense.amount}</p>
      <div className="buttons-container">
        <button className="edit-button">Edit</button>
        <button className="delete-button">X</button>
      </div>
    </li>
  );
};

export default BudgetItem;
