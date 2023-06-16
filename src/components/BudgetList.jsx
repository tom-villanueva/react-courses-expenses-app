import { useContext } from "react";
import BudgetItem from "./BudgetItem";
import BudgetContext from "../BudgetContext";

const BudgetList = () => {
  const { expenses } = useContext(BudgetContext);

  return (
    <ul className="budget-list">
      {expenses.map((expense) => {
        return <BudgetItem key={expense.id} expense={expense} />;
      })}
    </ul>
  );
};

export default BudgetList;
