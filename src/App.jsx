import "./App.css";
import BudgetList from "./components/BudgetList";

function App() {
  const expenses = [
    { id: 1, description: "Gasto 1", amount: 1000, isImportant: false },
    { id: 2, description: "Gasto 2", amount: 500, isImportant: true },
  ];

  return (
    <div className="budget-manager">
      <h1>Budget Manager</h1>
      <div className="budget-summary">
        <div className="summary-box total">
          <h2>Total</h2>
          <p>Amount</p>
          <p>$8000</p>
        </div>
        <div className="summary-box spent">
          <h2>Spent</h2>
          <p>Amount</p>
          <p>$1500</p>
        </div>
        <div className="summary-box remaining">
          <h2>Remaining</h2>
          <p>Amount</p>
          <p>$6500</p>
        </div>
      </div>
      <h3>Expenses</h3>
      <BudgetList expenses={expenses} />
      <h3>Add new Expense</h3>
      <form className="form">
        <label htmlFor="description">Description</label>
        <input id="description" name="description" type="text"></input>
        <label htmlFor="amount">Amount Spent</label>
        <input id="amount" name="amount" type="number"></input>
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
