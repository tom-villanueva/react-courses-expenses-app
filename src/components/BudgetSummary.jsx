import BudgetSummaryBox from "./BudgetSummaryBox";

const BudgetSummary = ({ total, spent }) => {
  return (
    <section className="budget-summary">
      <BudgetSummaryBox title="total" amount={total} />
      <BudgetSummaryBox title="spent" amount={spent} />
      <BudgetSummaryBox title="remaining" amount={total - spent} />
    </section>
  );
};

export default BudgetSummary;
