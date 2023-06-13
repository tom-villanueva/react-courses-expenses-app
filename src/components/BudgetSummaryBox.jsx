const BudgetSummaryBox = ({ title, amount }) => {
  return (
    <div className={`summary-box ${title}`}>
      <h2>{title}</h2>
      <p>Amount</p>
      <p className="amount">${amount}</p>
    </div>
  );
};

export default BudgetSummaryBox;
