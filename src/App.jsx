import "./App.css";
import BudgetExpenseForm from "./components/BudgetExpenseForm";
import BudgetList from "./components/BudgetList";
import BudgetSummary from "./components/BudgetSummary";
import { useState } from "react";

const generateUniqueID = (array) => {
  let uniqueID;
  const usedIDs = new Set();

  do {
    uniqueID = Math.floor(Math.random() * 1000);
  } while (usedIDs.has(uniqueID) || uniqueID.toString().length > 3);

  usedIDs.add(uniqueID);

  return uniqueID;
};

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Gasto 1", amount: 1000, isImportant: false },
    { id: 2, description: "Gasto 2", amount: 500, isImportant: true },
  ]);

  const onAddExpense = (expense) => {
    const newExpense = {
      id: generateUniqueID(expenses),
      ...expense,
    };

    const newExpenses = [...expenses, newExpense];

    setExpenses(newExpenses);
  };

  const totalSpent = () => {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  };

  return (
    <div className="budget-manager">
      <h1>Budget Manager</h1>
      <BudgetSummary total={8000} spent={totalSpent()} />
      <h3>Expenses</h3>
      <BudgetList expenses={expenses} />
      <h3>Add new Expense</h3>
      <BudgetExpenseForm onAddExpense={onAddExpense} />
    </div>
  );
}

export default App;
