import "./App.css";
import { BudgetContextProvider } from "./BudgetContext";
import BudgetExpenseForm from "./components/BudgetExpenseForm";
import BudgetList from "./components/BudgetList";
import BudgetSummary from "./components/BudgetSummary";
import { useState } from "react";

function App() {
  return (
    <BudgetContextProvider>
      <div className="budget-manager">
        <h1>Budget Manager</h1>
        <BudgetSummary />
        <h3>Expenses</h3>
        <BudgetList />
        <h3>Add new Expense</h3>
        <BudgetExpenseForm />
      </div>
    </BudgetContextProvider>
  );
}

export default App;
