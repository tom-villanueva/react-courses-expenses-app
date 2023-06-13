import "./App.css";
import BudgetExpenseForm from "./components/BudgetExpenseForm";
import BudgetList from "./components/BudgetList";
import BudgetSummary from "./components/BudgetSummary";

function App() {
  const expenses = [
    { id: 1, description: "Gasto 1", amount: 1000, isImportant: false },
    { id: 2, description: "Gasto 2", amount: 500, isImportant: true },
  ];

  return (
    <div className="budget-manager">
      <h1>Budget Manager</h1>
      <BudgetSummary total={8000} spent={1500} />
      <h3>Expenses</h3>
      <BudgetList expenses={expenses} />
      <h3>Add new Expense</h3>
      <BudgetExpenseForm />
    </div>
  );
}

export default App;
