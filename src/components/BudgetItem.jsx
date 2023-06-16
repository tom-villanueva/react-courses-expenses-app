import { useContext, useState } from "react";
import BudgetContext from "../BudgetContext";

const BudgetItem = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { onEditExpense, onDeleteExpense } = useContext(BudgetContext);

  return (
    <li className="budget-item">
      {!isEditing ? (
        <>
          <p className="item-name">
            {expense.description} {expense.isImportant && "❗"}
          </p>
          <p className="item-amount">${expense.amount}</p>
        </>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="description">Description</label>
            <input
              className="input"
              id="description"
              name="description"
              type="text"
              value={expense.description}
              onChange={(e) => {
                onEditExpense({
                  ...expense,
                  description: e.target.value,
                });
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="amount">Amount Spent</label>
            <input
              className="input"
              id="amount"
              name="amount"
              type="number"
              value={expense.amount}
              onChange={(e) => {
                onEditExpense({
                  ...expense,
                  amount: Number(e.target.value),
                });
              }}
            />
          </div>
        </>
      )}
      <div className="buttons-container">
        <button
          className="edit-button"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          {!isEditing ? "Edit" : "Save"}
        </button>
        <button
          className="delete-button"
          onClick={() => {
            onDeleteExpense(expense.id);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default BudgetItem;
