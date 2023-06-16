import { useContext } from "react";
import BudgetSummaryBox from "./BudgetSummaryBox";
import BudgetContext from "../BudgetContext";

const BudgetSummary = () => {
  const { total, totalSpent } = useContext(BudgetContext);

  const spent = totalSpent();

  return (
    <section className="budget-summary">
      <BudgetSummaryBox title="total" amount={total} />
      <BudgetSummaryBox title="spent" amount={spent} />
      <BudgetSummaryBox title="remaining" amount={total - spent} />
    </section>
  );
};

export default BudgetSummary;
