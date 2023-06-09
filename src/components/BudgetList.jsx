import BudgetItem from "./BudgetItem";

const BudgetList = ({ expenses }) => {
  return (
    <ul className="budget-list">
      {expenses.map((expense) => {
        return <BudgetItem key={expense.id} expense={expense} />;
      })}
    </ul>
  );
};

export default BudgetList;
