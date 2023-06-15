import { useState } from "react";

const BudgetExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...expense,
      amount: Number(expense.amount),
    };

    onAddExpense(newExpense);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        value={expense.description}
        onChange={handleChange}
      />
      <label htmlFor="amount">Amount Spent</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={expense.amount}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default BudgetExpenseForm;
