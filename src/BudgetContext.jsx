import { createContext, useState } from "react";

const BudgetContext = createContext(null);

export default BudgetContext;

const generateUniqueID = (array) => {
  let uniqueID;
  const usedIDs = new Set();

  do {
    uniqueID = Math.floor(Math.random() * 1000);
  } while (usedIDs.has(uniqueID) || uniqueID.toString().length > 3);

  usedIDs.add(uniqueID);

  return uniqueID;
};

export const BudgetContextProvider = ({ children }) => {
  const [total, setTotal] = useState(8000);
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

  // delete
  const onDeleteExpense = (expenseId) => {
    const newExpenses = expenses.filter((expense) => expense.id !== expenseId);

    setExpenses(newExpenses);
  };

  // edit
  const onEditExpense = (editedExpense) => {
    const newExpenses = [...expenses];

    const expenseIdx = expenses.findIndex(
      (expense) => expense.id === editedExpense.id
    );

    newExpenses[expenseIdx] = editedExpense;

    setExpenses(newExpenses);
  };

  const totalSpent = () => {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  };

  const budget = {
    total,
    expenses,
    totalSpent,
    onAddExpense,
    onEditExpense,
    onDeleteExpense,
  };

  return (
    <BudgetContext.Provider value={budget}>{children}</BudgetContext.Provider>
  );
};
