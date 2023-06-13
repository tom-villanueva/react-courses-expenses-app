const BudgetExpenseForm = () => {
  return (
    <form className="form">
      <label htmlFor="description">Description</label>
      <input id="description" name="description" type="text" />
      <label htmlFor="amount">Amount Spent</label>
      <input id="amount" name="amount" type="number" />
      <button type="submit">Save</button>
    </form>
  );
};

export default BudgetExpenseForm;
